import styled from 'styled-components'
import { boxShadow } from '../../../styling/helpers'

export const Card = styled.div`
  ${({ theme }) => boxShadow(theme, theme.shadows.depth1)}

  background-color: ${({ theme }) => theme.colors.cards};
  border-radius: 1rem;
  overflow: hidden;
`
