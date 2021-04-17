import { Accidental } from '../Accidental'
import { Note } from '../Note'
import { PitchClass } from '../PitchClass'

export interface Notes {
  c: Note
  cSharp: Note
  dFlat: Note
  d: Note
  dSharp: Note
  eFlat: Note
  e: Note
  f: Note
  fSharp: Note
  gFlat: Note
  g: Note
  gSharp: Note
  aFlat: Note
  a: Note
  aSharp: Note
  bFlat: Note
  b: Note
}

export const notes: Notes = {
  c: {
    pitchClass: PitchClass.C,
    accidental: Accidental.Natural,
  },
  cSharp: {
    pitchClass: PitchClass.C,
    accidental: Accidental.Sharp,
  },
  dFlat: {
    pitchClass: PitchClass.D,
    accidental: Accidental.Flat,
  },
  d: {
    pitchClass: PitchClass.D,
    accidental: Accidental.Natural,
  },
  dSharp: {
    pitchClass: PitchClass.D,
    accidental: Accidental.Sharp,
  },
  eFlat: {
    pitchClass: PitchClass.E,
    accidental: Accidental.Flat,
  },
  e: {
    pitchClass: PitchClass.E,
    accidental: Accidental.Natural,
  },
  f: {
    pitchClass: PitchClass.F,
    accidental: Accidental.Natural,
  },
  fSharp: {
    pitchClass: PitchClass.F,
    accidental: Accidental.Sharp,
  },
  gFlat: {
    pitchClass: PitchClass.G,
    accidental: Accidental.Flat,
  },
  g: {
    pitchClass: PitchClass.G,
    accidental: Accidental.Natural,
  },
  gSharp: {
    pitchClass: PitchClass.G,
    accidental: Accidental.Sharp,
  },
  aFlat: {
    pitchClass: PitchClass.A,
    accidental: Accidental.Flat,
  },
  a: {
    pitchClass: PitchClass.A,
    accidental: Accidental.Natural,
  },
  aSharp: {
    pitchClass: PitchClass.A,
    accidental: Accidental.Sharp,
  },
  bFlat: {
    pitchClass: PitchClass.B,
    accidental: Accidental.Flat,
  },
  b: {
    pitchClass: PitchClass.B,
    accidental: Accidental.Natural,
  },
}
