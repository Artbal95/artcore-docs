import fs from 'node:fs'
import path from 'node:path'
import { Locales, RootMeta, SectionMeta } from '../types/types'
import { DefaultTheme } from 'vitepress'

const DOCS_PATH = 'docs'
const DOCS_ROOT = path.resolve(process.cwd(), DOCS_PATH)

const generatePath = (dir: string, locale?: Locales, fileName?: string): string => {
  const stared = locale ? `/${locale}/${DOCS_PATH}/${dir}/` : `/${DOCS_PATH}/${dir}/`

  return fileName ? `${stared}${fileName}` : stared
}

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

const generateSidebar = (locale?: Locales): DefaultTheme.SidebarItem[] => {
  try {
    const localePath = locale
      ? path.join(DOCS_ROOT, 'src', locale, DOCS_PATH)
      : path.join(DOCS_ROOT, 'src', DOCS_PATH)

    if (!fs.existsSync(localePath)) {
      console.error(`Could not find localePath: ${localePath}`)
      return []
    }

    const rootMeta = readRootMeta(localePath)

    return rootMeta.map((root) => {
      const { index, dir, ...r } = root
      if (index) {
        return {
          text: r.text,
          link: generatePath(dir, locale),
        }
      }

      const sectionPath = path.join(localePath, dir)

      const sectionMeta = readSectionMeta(sectionPath)

      return {
        ...r,
        items: sectionMeta.map((section) => {
          const { fileName, text } = section
          return {
            text,
            link: generatePath(dir, locale, fileName),
          }
        }),
      }
    })
  } catch (e) {
    console.error({ e })
    return []
  }
}

export default generateSidebar
