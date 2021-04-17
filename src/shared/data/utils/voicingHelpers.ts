import { notNull } from '../../utils/notNull'
import { Chord } from '../Chord'
import { Note } from '../Note'
import { Tuning } from '../Tuning'
import { Voicing } from '../Voicing'
import { fingerings } from '../constants/fingerings'

export const generateVoicings = (root: Note, chord: Chord, tuning: Tuning): Voicing[] => {
  const matchingFingerings = fingerings
    .filter(f => f.chord === chord)
    .filter(f => f.tuning === tuning)

  return matchingFingerings.map(f => Voicing.create(root, f)).filter(notNull)
}
