import { notNull } from '../../utils/notNull'
import { Fingering } from '../Fingering'
import { chords } from './chords'
import { intervals } from './intervals'
import { tunings } from './tunings'

export const fingerings: Fingering[] = [
  Fingering.create(
    chords.major,
    [null, intervals.root, intervals.fifth, intervals.majorThird, intervals.root, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.major,
    [intervals.majorThird, intervals.root, intervals.fifth, intervals.root, null, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.minor,
    [intervals.minorThird, intervals.root, intervals.fifth, intervals.root, null, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.major,
    [null, intervals.majorThird, intervals.root, intervals.fifth, intervals.root, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.minor,
    [null, intervals.minorThird, intervals.root, intervals.fifth, intervals.root, null],
    tunings.standard,
  ),
].filter(notNull)
