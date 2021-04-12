import { FC } from 'react'
import { Switch } from 'react-router-dom'
import { homeRoute } from '../home'

export const Routes: FC = () => (
  <Switch>
    {homeRoute.route()}
  </Switch>
)
