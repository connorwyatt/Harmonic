import { Interval } from '../Interval'
import { Note } from '../Note'
import { PitchClass } from '../PitchClass'
import { chromaticScale } from '../constants/chromaticScale'

export const calculateNote = (
  root: Note,
  interval: Interval,
): Note => {
  const pitchClasses = Object.values(PitchClass)

  const rootPitchClassIndex = pitchClasses.indexOf(root.pitchClass)

  const rootChromaticIndex = chromaticScale.findIndex(notes => notes.some(n =>
    n.pitchClass === root.pitchClass && n.accidental === root.accidental))

  const notePitchClassIndex = (rootPitchClassIndex + interval.scaleDegree) % pitchClasses.length
  const notePitchClass = pitchClasses[notePitchClassIndex]

  const noteChromaticIndex = (rootChromaticIndex + interval.semitones) % chromaticScale.length
  const chromaticNotes = chromaticScale[noteChromaticIndex]

  const note = chromaticNotes.find(n => n.pitchClass === notePitchClass)

  if (note == null) {
    throw new Error()
  }

  return note
}
