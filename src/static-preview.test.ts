import { join, normalize, resolve, sep } from 'node:path'

function isPathAllowed(root: string, requestedPath: string): boolean {
  const rootWithSep = root.endsWith(sep) ? root : `${root}${sep}`
  const filePath = normalize(join(root, requestedPath))
  return filePath === root || filePath.startsWith(rootWithSep)
}

describe('Static Preview Path Validation', () => {
  const root = resolve('/app/out')

  it('allows valid requests within the root directory', () => {
    expect(isPathAllowed(root, '/index.html')).toBe(true)
    expect(isPathAllowed(root, '/about/index.html')).toBe(true)
    expect(isPathAllowed(root, '/css/style.css')).toBe(true)
  })

  it('prevents path traversal to parent directory', () => {
    expect(isPathAllowed(root, '/../package.json')).toBe(false)
    expect(isPathAllowed(root, '/../../etc/passwd')).toBe(false)
  })

  it('prevents path traversal to sibling directories matching root prefix', () => {
    const siblingPath = '../out-secret/secret.txt'
    expect(isPathAllowed(root, siblingPath)).toBe(false)
  })
})
