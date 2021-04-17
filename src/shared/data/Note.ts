import { Accidental } from './Accidental'
import { PitchClass } from './PitchClass'

export interface Note {
  pitchClass: PitchClass
  accidental: Accidental
}
