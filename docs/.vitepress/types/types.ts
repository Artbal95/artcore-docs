export type Locales = 'ru'

export interface RootMeta {
  index?: boolean
  dir: string
  text: string
  collapsed?: boolean
}

export interface SectionMeta {
  fileName: string
  text: string
}
