import { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { RouteDefinitionWithoutParams } from '../../routing'
import { NavLink } from './NavigationLink.styles'

export interface Props {
  to: RouteDefinitionWithoutParams
}

export const NavigationLink: FC<Props> = ({
  children,
  to,
}) => {
  const match = useRouteMatch(to.path)

  return (
    <NavLink
      to={to.href()}
      isActive={match?.isExact ?? false}
    >{children}
    </NavLink>
  )
}
