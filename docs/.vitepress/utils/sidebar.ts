import fs from 'node:fs'
import path from 'node:path'
import { RootMeta, SectionMeta } from '../types/types'
import { DefaultTheme } from 'vitepress'

const DOCS_PATH = 'docs'
const DOCS_ROOT = path.resolve(process.cwd(), DOCS_PATH)

const readJson = <T>(filePath: string): T => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T
}

const readRootMeta = (localePath: string): RootMeta[] => {
  const metaPath = path.join(localePath, '_meta.json')

  if (!fs.existsSync(metaPath)) {
    throw new Error(`Could not find meta file: ${metaPath}`)
  }

  return readJson<RootMeta[]>(metaPath)
}

const readSectionMeta = (sectionPath: string): SectionMeta[] => {
  const metaPath = path.join(sectionPath, '_meta.json')

  if (!fs.existsSync(metaPath)) {
    throw new Error(`Could not find meta file: ${metaPath}`)
  }

  return readJson<SectionMeta[]>(metaPath)
}

const generateSidebar = (locale?: string): DefaultTheme.SidebarItem[] => {
  try {
    const localePath = locale
      ? path.join(DOCS_ROOT, locale, DOCS_PATH)
      : path.join(DOCS_ROOT, DOCS_PATH)

    if (!fs.existsSync(localePath)) {
      console.error(`Could not find localePath: ${localePath}`)
      return []
    }

    const rootMeta = readRootMeta(localePath)

    return rootMeta.map((root) => {
      const { dir, ...r } = root
      const sectionPath = path.join(localePath, dir)

      const sectionMeta = readSectionMeta(sectionPath)

      return {
        ...r,
        items: sectionMeta.map((section) => {
          const { fileName, text } = section
          const link = locale
            ? `/${locale}/${DOCS_PATH}/${dir}/${fileName}`
            : `/${DOCS_PATH}/${dir}/${fileName}`

          return {
            text,
            link,
          }
        }),
      }
    })
  } catch (e) {
    return []
  }
}

export default generateSidebar
