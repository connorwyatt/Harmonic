import { FC } from 'react'
import { MainContent } from './MainLayout.styles'
import { Navigation } from './navigation'

export const MainLayout: FC = ({ children }) => (
  <>
    <Navigation />
    <MainContent>
      {children}
    </MainContent>
  </>
)
