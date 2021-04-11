import { defineRoute } from '../routing/defineRoute'
import { Home } from './Home.component'

export const homeRoute = defineRoute('/', () => <Home />)
