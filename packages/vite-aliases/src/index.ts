import path from 'path'
import type { AliasOptions } from 'vite'

const createAliases = (rootDir: string = process.cwd()): AliasOptions => {
  return {
    '@root': path.resolve(rootDir, 'src/root'),
    '@shared': path.resolve(rootDir, 'src/shared'),
    '@features': path.resolve(rootDir, 'src/features'),
  }
}

export default createAliases
