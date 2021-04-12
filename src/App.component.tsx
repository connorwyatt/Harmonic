import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MainLayout } from './layout'
import { Routes } from './routing'
import { GlobalStyles, theme } from './styling'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  </ThemeProvider>
)
