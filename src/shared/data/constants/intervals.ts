import { Interval } from '../Interval'

const root: Interval = {
  name: 'Root',
  notation: 'R',
  scaleDegree: 0,
  semitones: 0,
}

const second: Interval = {
  name: 'Second',
  notation: '2',
  scaleDegree: 1,
  semitones: 2,
}

const minorThird: Interval = {
  name: 'Minor Third',
  notation: '♭3',
  scaleDegree: 2,
  semitones: 3,
}

const majorThird: Interval = {
  name: 'Major Third',
  notation: '3',
  scaleDegree: 2,
  semitones: 4,
}

const fourth: Interval = {
  name: 'Fourth',
  notation: '4',
  scaleDegree: 3,
  semitones: 5,
}

const sharpFourth: Interval = {
  name: 'Sharp Fourth',
  notation: '#4',
  scaleDegree: 3,
  semitones: 6,
}

const flatFifth: Interval = {
  name: 'Flat Fifth',
  notation: '♭5',
  scaleDegree: 4,
  semitones: 6,
}

const fifth: Interval = {
  name: 'Fifth',
  notation: '5',
  scaleDegree: 4,
  semitones: 7,
}

const sixth: Interval = {
  name: 'Sixth',
  notation: '6',
  scaleDegree: 5,
  semitones: 9,
}

const flatSeventh: Interval = {
  name: 'Flat Seventh',
  notation: '♭7',
  scaleDegree: 6,
  semitones: 10,
}

const seventh: Interval = {
  name: 'Seventh',
  notation: '7',
  scaleDegree: 6,
  semitones: 11,
}

const ninth: Interval = {
  name: 'Ninth',
  notation: '9',
  scaleDegree: 1,
  semitones: 14,
}

export interface Intervals {
  root: Interval
  second: Interval
  minorThird: Interval
  majorThird: Interval
  fourth: Interval
  sharpFourth: Interval
  flatFifth: Interval
  fifth: Interval
  sixth: Interval
  flatSeventh: Interval
  seventh: Interval
  ninth: Interval
}

export const intervals: Intervals = {
  root,
  second,
  minorThird,
  majorThird,
  fourth,
  sharpFourth,
  flatFifth,
  fifth,
  sixth,
  flatSeventh,
  seventh,
  ninth,
}
