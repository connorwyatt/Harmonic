import { FC } from 'react'
import { Tuning } from '../../../data/Tuning'
import { Annotation } from './Annotation.component'
import { FretBar } from './FretBar.component'
import { GuitarDiagramAnnotation } from './GuitarDiagramAnnotation'
import { GuitarString } from './GuitarString.component'

export interface Props {
  frets: number
  tuning: Tuning
  annotations: GuitarDiagramAnnotation[]
}

const width = 400
const height = 560

const fretBarHeight = 10
const guitarStringAppearances = [{
  width: 5,
}, {
  width: 4.5,
}, {
  width: 4,
}, {
  width: 3,
}, {
  width: 2.5,
}, {
  width: 2,
}]
const guitarStringsCount = guitarStringAppearances.length
const guitarStringSpacing = width / (guitarStringsCount + 1)
const guitarStrings = guitarStringAppearances.map((s, i) => ({ ...s, x: guitarStringSpacing * (i + 1) }))

export const GuitarDiagram: FC<Props> = ({ frets, tuning, annotations }) => {
  const fretBars = frets + 1
  const fretBarPositions = Array(fretBars).fill(null).map((v, i) => ((height - fretBarHeight) / frets * i) + (fretBarHeight / 2))
  const fretHeight = (height - fretBarHeight) / frets

  const baseFret = 4

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x={0}
        y={0}
        width='100%'
        height='100%'
        fill='rgb(156, 129, 109)'
        stroke='rgb(255, 255, 255)'
        strokeWidth={1}
      />
      {fretBarPositions.map(p => (
        <FretBar
          key={p}
          y={p}
          height={fretBarHeight}
        />
      ))}
      {guitarStrings.map(s => (
        <GuitarString
          key={s.x}
          {...s}
        />
      ))}
      {annotations.map(a => (
        <Annotation
          key={`${a.string}-${a.fret}`}
          backgroundColor={a.backgroundColor}
          textColor={a.textColor}
          x={width - (a.string * guitarStringSpacing)}
          y={(a.fret - baseFret) * fretHeight + (fretHeight / 2) + (fretBarHeight / 2)}
        >
          {a.text}
        </Annotation>
      ))}
    </svg>
  )
}
