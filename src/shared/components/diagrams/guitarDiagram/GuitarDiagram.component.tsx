import { FC } from 'react'
import { Tuning } from '../../../data/Tuning'
import { formatNote } from '../../../data/utils/noteHelpers'
import { Annotation } from './Annotation'

export interface Props {
  tuning: Tuning
  annotations: Annotation[]
}

export const GuitarDiagram: FC<Props> = ({ tuning, annotations }) => (
  <div>
    <div>{tuning.name} - {tuning.notes.map(n => formatNote(n)).join('-')}</div>
    {annotations?.length > 0 && (
      <div>
        {annotations.map(a => (
          <div key={`${a.string}${a.fret}${a.text}`}>
            {a.string} {a.fret} {a.text}
          </div>
        ))}
      </div>
    )}
  </div>
)
