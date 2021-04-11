import { FC } from 'react'
import { Route as RRRoute } from 'react-router-dom'

export interface Props {
  path: string
}

export const Route: FC<Props> = ({ children, path }) => (
  <RRRoute
    path={path}
    exact
  >
    {children}
  </RRRoute>
)
