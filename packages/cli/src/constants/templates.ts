const TEMPLATES = [
  {
    name: 'Pure React',
    value: 'pure-react',
  },
] as const

export type Template = (typeof TEMPLATES)[number]
export default TEMPLATES
