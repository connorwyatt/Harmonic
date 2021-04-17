import { Accidental } from '../Accidental'

const accidentalSymbols = new Map([
  [Accidental.Flat, '♭'],
  [Accidental.Sharp, '#'],
])

export const formatAccidental = (accidental: Accidental): string =>
  accidentalSymbols.get(accidental) ?? ''
