import { lighten, transparentize } from 'polished'
import { DefaultTheme } from 'styled-components'

const white = '#ffffff'
const black = '#000000'

const textColor = white
const shadowColor = transparentize(0.9, black)
const linkColor = '#99adff'
const focusedLinkColor = lighten(0.025, linkColor)

export const theme: DefaultTheme = {
  colors: {
    background: '#202028',
    cards: '#252733',
    links: {
      normal: linkColor,
      hover: focusedLinkColor,
      focus: focusedLinkColor,
      active: focusedLinkColor,
    },
    separators: transparentize(0.9, textColor),
    shadows: shadowColor,
    text: textColor,
  },
  durations: {
    short: '0.2s',
    medium: '0.4s',
    long: '0.7s',
  },
  shadows: {
    depth1: {
      xOffset: '0',
      yOffset: '0.25rem',
      blur: '0.5rem',
    },
  },
  typography: {
    body: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontSize: '1rem',
      fontWeight: '400',
    },
  },
}
