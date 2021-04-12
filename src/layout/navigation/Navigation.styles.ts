import styled from 'styled-components'
import { NAVIGATION_WIDTH } from '../constants'

export const NavContainer = styled.nav`
  border-right: 1px solid ${({ theme }) => theme.colors.separators};
  bottom: 0;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: ${NAVIGATION_WIDTH};
`
