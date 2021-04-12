import { createGlobalStyle } from 'styled-components'
import { elementStatesColors } from './helpers'
import { reset } from './reset.styles'

export const GlobalStyles = createGlobalStyle`
  ${reset}
    
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    margin: 0;
  }
  
  a {
    ${({ theme }) => elementStatesColors(theme.colors.links)}
  }
`
