import { Note } from '../Note'
import { formatAccidental } from './accidentalHelpers'

export const formatNote = (note: Note): string =>
  `${note.pitchClass}${formatAccidental(note.accidental)}`
