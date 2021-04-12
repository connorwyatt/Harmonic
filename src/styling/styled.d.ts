import 'styled-components'

declare module 'styled-components' {
  export interface ElementStatesColors {
    normal: string
    hover: string
    focus: string
    active: string
  }

  export interface Colors {
    background: string
    cards: string
    links: ElementStatesColors
    separators: string
    shadows: string
    text: string
  }

  export interface Durations {
    short: string
    medium: string
    long: string
  }

  export interface ShadowStyle {
    xOffset: string
    yOffset: string
    blur: string
  }

  export interface Shadows {
    depth1: ShadowStyle
  }

  export interface TextStyle {
    fontFamily: string
    fontSize: string
    fontWeight: string
  }

  export interface Typography {
    body: TextStyle
  }

  export interface DefaultTheme {
    colors: Colors
    durations: Durations
    shadows: Shadows
    typography: Typography
  }
}
