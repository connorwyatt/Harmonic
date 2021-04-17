import { Chord } from './Chord'
import { Interval } from './Interval'
import { Tuning } from './Tuning'

export class Fingering {
  public readonly chord: Chord
  public readonly intervals: Array<Interval | null>
  public readonly tuning: Tuning

  private constructor(
    chord: Chord,
    intervals: Array<Interval | null>,
    tuning: Tuning,
  ) {
    this.chord = chord
    this.intervals = intervals
    this.tuning = tuning
  }

  public static create(
    chord: Chord,
    intervals: Array<Interval | null>,
    tuning: Tuning,
  ): Fingering | null {
    if (!this.checkIntervals(chord, intervals)) return null

    return new Fingering(chord, intervals, tuning)
  }

  private static checkIntervals(
    chord: Chord,
    intervals: Array<Interval | null>,
  ): boolean {
    const extraNotes = intervals.filter(interval => {
      if (interval == null) return false

      return !chord.intervals.includes(interval)
    })

    const hasExtraNotes = extraNotes.length > 0

    if (hasExtraNotes && process.env.NODE_ENV !== 'production') {
      console.warn(`Chord fingering invalid for ${chord.name} with intervals ${intervals.join(
        '-')}`)
    }

    return !hasExtraNotes
  }
}
