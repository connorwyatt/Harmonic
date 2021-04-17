import { chords } from '../constants/chords'
import { notes } from '../constants/notes'
import { tunings } from '../constants/tunings'
import { generateVoicings } from './voicingHelpers'

test('it should generate voicings for C Major in Standard tuning', () => {
  const root = notes.c
  const chord = chords.major
  const tuning = tunings.standard
  const voicings = generateVoicings(root, chord, tuning)
  expect(voicings.length).toBeGreaterThan(0)
})
