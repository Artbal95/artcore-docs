import { DefaultTheme } from 'vitepress'

export type SidebarItem = Required<DefaultTheme.SidebarItem>

export interface RootMeta extends Pick<SidebarItem, 'text' | 'collapsed'> {
  dir: string
}

export interface SectionMeta extends Pick<SidebarItem, 'text'> {
  fileName: string
}
