import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from './routing'
import { GlobalStyles, theme } from './styling'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
)
