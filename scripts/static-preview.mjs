import { createReadStream, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'

const root = resolve(process.cwd(), 'out')
const rootWithSep = root.endsWith(sep) ? root : `${root}${sep}`
const port = Number(process.env.PORT || 3003)

const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.webp': 'image/webp',
}

createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
  const pathname = decodeURIComponent(url.pathname)
  const requestedPath = pathname === '/' || pathname.endsWith('/') ? `${pathname}index.html` : pathname
  const filePath = normalize(join(root, requestedPath))

  if (filePath !== root && !filePath.startsWith(rootWithSep)) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  const fallbackPath = join(root, '404.html')
  const finalPath = existsSync(filePath) ? filePath : fallbackPath

  response.writeHead(existsSync(filePath) ? 200 : 404, {
    'content-type': contentTypes[extname(finalPath)] || 'application/octet-stream',
  })
  createReadStream(finalPath).pipe(response)
}).listen(port, () => {
  console.log(`static http://localhost:${port}`)
})
