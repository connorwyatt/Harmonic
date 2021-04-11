import { ReactNode } from 'react'
import { generatePath, useParams } from 'react-router-dom'
import { Route } from './Route.component'

export interface RouteDefinitionWithoutParams {
  path: string
  href: () => string
  route: () => ReactNode
}

export interface RouteDefinitionWithParams<Params extends object> {
  path: string
  href: (params: Params) => string
  route: () => ReactNode
  useParams: () => Params
}

export type RouteDefinition<Params extends object | null = null> = Params extends object
  ? RouteDefinitionWithParams<Params>
  : RouteDefinitionWithoutParams

export const defineRoute = <Params extends object | null = null>(
  path: string,
  route: () => ReactNode,
): RouteDefinition<Params> => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    path,
    href: (params) => params != null
      ? generatePath(path, params)
      : path,
    route: () => (
      <Route
        path={path}
      >
        {route()}
      </Route>
    ),
    useParams,
  } as RouteDefinition<Params>
}
