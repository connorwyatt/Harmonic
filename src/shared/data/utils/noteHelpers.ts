import { Note } from '../Note'
import { chromaticScale } from '../constants/chromaticScale'
import { formatAccidental } from './accidentalHelpers'

export const formatNote = (note: Note): string =>
  `${note.pitchClass}${formatAccidental(note.accidental)}`

export const calculateSemitones = (from: Note, to: Note): number => {
  const fromChromaticIndex = chromaticScale.findIndex(notes => notes.some(n =>
    n.pitchClass === from.pitchClass && n.accidental === from.accidental))
  const toChromaticIndex = chromaticScale.findIndex(notes => notes.some(n =>
    n.pitchClass === to.pitchClass && n.accidental === to.accidental))

  let semitones = toChromaticIndex - fromChromaticIndex

  if (semitones < 0) semitones += 12

  return semitones
}
