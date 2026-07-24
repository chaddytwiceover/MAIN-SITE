import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const source = path.join(repoRoot, '.htaccess')
const outDir = path.join(repoRoot, 'out')
const destination = path.join(outDir, '.htaccess')

await mkdir(outDir, { recursive: true })
await copyFile(source, destination)

console.log('Copied .htaccess to out/.htaccess')
