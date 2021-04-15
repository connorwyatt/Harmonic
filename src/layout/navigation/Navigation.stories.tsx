import { Meta, Story } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Navigation } from './Navigation.component'

const story: Meta = {
  component: Navigation,
  title: 'Layout/Navigation',
  decorators: [
    (Story) => (
      <MemoryRouter><Story /></MemoryRouter>
    ),
  ],
}
export default story

export const Default: Story = () => (
  <Navigation />
)

Default.parameters = {
  controls: {
    hideNoControlsWarning: true,
  },
}
