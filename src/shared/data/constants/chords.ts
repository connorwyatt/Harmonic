import { Chord } from '../Chord'
import {
  intervals,
} from './intervals'

const major: Chord = {
  name: 'Major',
  notation: 'maj',
  intervals: [
    intervals.root,
    intervals.majorThird,
    intervals.fifth,
  ],
}

const minor: Chord = {
  name: 'Minor',
  notation: 'min',
  intervals: [
    intervals.root,
    intervals.minorThird,
    intervals.fifth,
  ],
}

const majorSeventh: Chord = {
  name: 'Major 7th',
  notation: 'maj7',
  intervals: [
    intervals.root,
    intervals.majorThird,
    intervals.fifth,
    intervals.seventh,
  ],
}

const dominantSeventh: Chord = {
  name: 'Dominant 7th',
  notation: '7',
  intervals: [
    intervals.root,
    intervals.majorThird,
    intervals.fifth,
    intervals.flatSeventh,
  ],
}

const minorSeventh: Chord = {
  name: 'Minor 7th',
  notation: 'min7',
  intervals: [
    intervals.root,
    intervals.minorThird,
    intervals.fifth,
    intervals.flatSeventh,
  ],
}

const minorSeventhFlatFive: Chord = {
  name: 'Minor 7th \U+266D5',
  notation: 'min7\U+266D5',
  intervals: [
    intervals.root,
    intervals.minorThird,
    intervals.flatFifth,
    intervals.flatSeventh,
  ],
}

const majorNinth: Chord = {
  name: 'Major 9th',
  notation: 'maj9',
  intervals: [
    intervals.root,
    intervals.majorThird,
    intervals.fifth,
    intervals.seventh,
    intervals.ninth,
  ],
}

const ninth: Chord = {
  name: '9th',
  notation: '9',
  intervals: [
    intervals.root,
    intervals.majorThird,
    intervals.fifth,
    intervals.flatSeventh,
    intervals.ninth,
  ],
}

const minorNinth: Chord = {
  name: 'Minor 9th',
  notation: 'min9',
  intervals: [
    intervals.root,
    intervals.minorThird,
    intervals.fifth,
    intervals.flatSeventh,
    intervals.ninth,
  ],
}

export const chords = {
  major,
  minor,
  majorSeventh,
  dominantSeventh,
  minorSeventh,
  minorSeventhFlatFive,
  majorNinth,
  ninth,
  minorNinth
}
