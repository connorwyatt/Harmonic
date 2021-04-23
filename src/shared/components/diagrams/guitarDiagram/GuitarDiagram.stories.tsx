import { Meta, Story } from '@storybook/react'
import { Tuning } from '../../../data/Tuning'
import { tunings } from '../../../data/constants/tunings'
import { GuitarDiagram } from './GuitarDiagram.component'
import { GuitarDiagramAnnotation } from './GuitarDiagramAnnotation'

const options = Object.keys(tunings)
const annotations: GuitarDiagramAnnotation[] = [{
  text: 'R',
  backgroundColor: 'rgb(32, 134, 190)',
  textColor: 'white',
  string: 6,
  fret: 5,
}, {
  text: '5',
  backgroundColor: 'white',
  textColor: 'black',
  string: 5,
  fret: 7,
}, {
  text: 'R',
  backgroundColor: 'rgb(32, 134, 190)',
  textColor: 'white',
  string: 4,
  fret: 7,
}, {
  text: '3',
  backgroundColor: 'white',
  textColor: 'black',
  string: 3,
  fret: 6,
}]

const story: Meta = {
  component: GuitarDiagram,
  title: 'Shared/GuitarDiagram',
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
    frets: {
      defaultValue: 5,
    },
    annotations: {
      defaultValue: annotations,
    },
  },
}
export default story

export const Default: Story = ({ frets, tuning, annotations }) => (
  <GuitarDiagram
    frets={frets}
    tuning={tuning}
    annotations={annotations}
  />
)
