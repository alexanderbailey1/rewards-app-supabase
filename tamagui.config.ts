// tamagui.config.ts
import { createTamagui } from 'tamagui'
import { tokens } from '@tamagui/themes'

export const config = createTamagui({
  defaultTheme: 'light',
  themes: {
    light: {
      background: 'white',
      color: 'black',
    },
    dark: {
      background: 'black',
      color: 'white',
    },
  },
  tokens,
  shorthands: {
    p: 'padding',
    m: 'margin',
    bg: 'backgroundColor',
    c: 'color',
  },
})
