import { readFile, readdir, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]

export function inspectFrame(html) {
  const tag = html.match(/<iframe\b[^>]*>/)?.[0]
  if (!tag) throw new Error('Missing game iframe')
  const src = attribute(tag, 'src')
  const sandbox = attribute(tag, 'sandbox')?.split(/\s+/) ?? []
  if (!src || !sandbox.includes('allow-scripts') || !sandbox.includes('allow-same-origin')) {
    throw new Error('Game URL or required iframe sandbox permissions missing')
  }
  if (!(attribute(tag, 'allow') ?? '').includes('fullscreen')) throw new Error('Fullscreen permission missing')
  return { src }
}

async function buildManifest() {
  const projects = []
  for (const entry of await readdir(resolve(root, 'out/lab'), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const html = await readFile(resolve(root, 'out/lab', entry.name, 'index.html'), 'utf8')
    if (!html.includes('<iframe')) continue
    projects.push({ path: `/lab/${entry.name}/`, ...inspectFrame(html) })
  }
  for (const slug of ['flowerquest', 'south-florida-fighter']) {
    if (!projects.some(project => project.path === `/lab/${slug}/`)) throw new Error(`Missing ${slug} export`)
  }
  const revision = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
  await writeFile(resolve(root, 'out/lab-deployment.json'), JSON.stringify({ revision, projects }, null, 2))
  console.log(`Validated ${projects.length} exported game frames; recorded revision ${revision}`)
}

async function verifyDeployment(baseUrl, expectedRevision) {
  if (!baseUrl || !expectedRevision) throw new Error('Usage: node scripts/lab-deployment.mjs verify <base-url> <commit-sha>')
  const get = async (path) => {
    const url = new URL(path, baseUrl)
    url.searchParams.set('deployment-check', expectedRevision)
    const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(15000) })
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`)
    return response
  }
  const manifest = await (await get('/lab-deployment.json')).json()
  if (manifest.revision !== expectedRevision) throw new Error(`Stale deployment: expected ${expectedRevision}, received ${manifest.revision}`)
  for (const slug of ['flowerquest', 'south-florida-fighter']) {
    if (!manifest.projects.some(project => project.path === `/lab/${slug}/`)) throw new Error(`Missing ${slug} in deployed manifest`)
  }
  for (const project of manifest.projects) {
    const frame = inspectFrame(await (await get(project.path)).text())
    if (frame.src !== project.src) throw new Error(`${project.path}: deployed game URL differs from build`)
    console.log(`PASS ${project.path}: ${frame.src}`)
  }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) {
  try {
    if (process.argv[2] === 'verify') await verifyDeployment(process.argv[3], process.argv[4])
    else await buildManifest()
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
