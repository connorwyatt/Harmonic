import { Tuning } from '../Tuning'
import { notes } from './notes'

export interface Tunings {
  standard: Tuning
}

export const tunings: Tunings = {
  standard: {
    name: 'Standard',
    notes: [
      notes.e,
      notes.b,
      notes.g,
      notes.d,
      notes.a,
      notes.e,
    ],
  },
}
