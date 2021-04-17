import { Meta, Story } from '@storybook/react'
import { Tuning } from '../../../data/Tuning'
import { tunings } from '../../../data/constants/tunings'
import { GuitarDiagram } from './GuitarDiagram.component'

const options = Object.keys(tunings)
const story: Meta = {
  component: GuitarDiagram,
  title: 'Shared/GuitarVoicingDiagram',
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '480px' }}><Story /></div>
    ),
  ],
  argTypes: {
    tuning: {
      options: options,
      mapping: tunings,
      defaultValue: options[0],
      control: {
        type: 'select',
        labels: Object.fromEntries(
          Object.entries(tunings)
            .map((entry: [string, Tuning]) => [entry[0], entry[1].name]),
        ),
      },
    },
  },
}
export default story

export const Default: Story = ({ tuning, annotations }) => (
  <GuitarDiagram
    tuning={tuning}
    annotations={annotations}
  />
)
