import { transparentize } from 'polished'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { boxShadow, allElementStatesColors } from '../../styling/helpers'

export interface NavLinkProps {
  isActive: boolean
}

export const NavLink = styled(Link)<NavLinkProps>`
  ${({ theme }) => allElementStatesColors(theme.colors.text)}
  
  border-radius: 1rem;
  display: block;
  padding: 1rem;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.durations.short} ease-in-out;
  
  & + & {
    margin-top: 0.5rem;
  }
  
  &:hover, &:focus, &:active {
    ${({ theme }) => boxShadow(theme, theme.shadows.depth1)}

    background-color: ${({ theme }) => transparentize(0.5, theme.colors.cards)};
  }
  
  && {
    ${({ isActive }) => isActive && css`
      ${({ theme }) => boxShadow(theme, theme.shadows.depth1)}
      
      background-color: ${({ theme }) => theme.colors.cards};
    `}
  }
`
