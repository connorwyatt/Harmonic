import { Meta, Story } from '@storybook/react'
import { Card } from './Card.styles'
import { CardBody } from './CardBody.styles'
import { CardHeader } from './CardHeader.styles'

const story: Meta = {
  component: Card,
  title: 'Shared/Card',
}
export default story

interface DefaultProps {
  showCardHeader: boolean
  cardHeaderText: string
  showCardBody: boolean
  cardBodyText: string
}

export const Default: Story<DefaultProps> = () => (
  <Card>
    <CardHeader>Title</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </CardBody>
  </Card>
)

Default.parameters = {
  controls: {
    hideNoControlsWarning: true,
  },
}
