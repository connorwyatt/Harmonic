import { FC } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { homeRoute } from '../home'

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      {homeRoute.route()}
    </Switch>
  </BrowserRouter>
)
