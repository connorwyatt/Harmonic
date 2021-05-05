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
  Fingering.create(
    chords.majorSeventh,
    [null, intervals.majorThird, intervals.seventh, intervals.fifth, intervals.root, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [null, intervals.fifth, intervals.root, intervals.seventh, intervals.majorThird, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [null, intervals.seventh, intervals.majorThird, intervals.root, intervals.fifth, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [null, intervals.root, intervals.fifth, intervals.majorThird, intervals.seventh, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [intervals.majorThird, intervals.seventh, intervals.fifth, intervals.root, null, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [intervals.fifth, intervals.root, intervals.seventh, intervals.majorThird, null, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [intervals.seventh, intervals.majorThird, intervals.root, intervals.fifth, null, null],
    tunings.standard,
  ),
  Fingering.create(
    chords.majorSeventh,
    [intervals.root, intervals.fifth, intervals.majorThird, intervals.seventh, null, null],
    tunings.standard,
  ),
].filter(notNull)
