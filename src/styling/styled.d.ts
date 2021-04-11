import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      body: {
        fontFamily: string
        fontSize: string
        fontWeight: string
      }
    }
  }
}
