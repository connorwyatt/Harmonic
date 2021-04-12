import { FC } from 'react'
import { homeRoute } from '../../home'
import { Section } from '../../shared/components/spacing'
import { NavContainer } from './Navigation.styles'
import { NavigationLink } from './NavigationLink.component'
import { Logo } from './logo'

export const Navigation: FC = () => (
  <NavContainer>
    <Section>
      <Logo />
    </Section>

    <Section>
      <NavigationLink to={homeRoute}>Home</NavigationLink>
    </Section>
  </NavContainer>
)
