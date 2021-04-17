import { Chord } from './Chord'
import { Fingering } from './Fingering'
import { Interval } from './Interval'
import { Note } from './Note'
import { Tuning } from './Tuning'
import { calculateNote } from './utils/intervalHelpers'
import { calculateSemitones } from './utils/noteHelpers'

export class Voicing {
  public readonly root: Note
  public readonly chord: Chord
  public readonly intervals: Array<Interval | null>
  public readonly tuning: Tuning
  public readonly notes: Array<Note | null>
  public readonly frets: Array<number | null>

  private constructor(
    root: Note,
    fingering: Fingering,
    notes: Array<Note | null>,
    frets: Array<number | null>,
  ) {
    this.root = root
    this.chord = fingering.chord
    this.intervals = fingering.intervals
    this.tuning = fingering.tuning
    this.notes = notes
    this.frets = frets
  }

  public static create(root: Note, fingering: Fingering): Voicing | null {
    const notes = this.calculateNotes(root, fingering.intervals)
    const frets = this.calculateFrets(notes, fingering.tuning)

    if (frets === null) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `Chord voicing invalid for ${fingering.chord.name}
          with intervals ${fingering.intervals.join('-')}`)
      }

      return null
    }

    return new Voicing(root, fingering, notes, frets)
  }

  private static calculateNotes(
    root: Note,
    intervals: Array<Interval | null>,
  ): Array<Note | null> {
    return intervals.map(interval => {
      if (interval === null) return null

      return calculateNote(root, interval)
    })
  }

  private static calculateFrets(
    notes: Array<Note | null>,
    tuning: Tuning,
  ): Array<number | null> | null {
    if (notes.length !== tuning.notes.length) {
      return null
    }

    return notes.map((note, index) =>
      note === null ? null : calculateSemitones(tuning.notes[index], note))
  }
}
