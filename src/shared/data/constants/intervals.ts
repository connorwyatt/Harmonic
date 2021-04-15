import { Interval } from '../Interval'

const root: Interval = {
  name: 'Root',
  notation: 'R',
  semitones: 0,
}

const second: Interval = {
  name: 'Second',
  notation: '2',
  semitones: 2,
}

const minorThird: Interval = {
  name: 'Minor Third',
  notation: '\U+266D3',
  semitones: 3,
}

const majorThird: Interval = {
  name: 'Major Third',
  notation: '3',
  semitones: 4,
}

const fourth: Interval = {
  name: 'Fourth',
  notation: '4',
  semitones: 5,
}

const sharpFourth: Interval = {
  name: 'Sharp Fourth',
  notation: '#4',
  semitones: 6,
}

const flatFifth: Interval = {
  name: 'Flat Fifth',
  notation: '\U+266D5',
  semitones: 6,
}

const fifth: Interval = {
  name: 'Fifth',
  notation: '5',
  semitones: 7,
}

const sixth: Interval = {
  name: 'Sixth',
  notation: '6',
  semitones: 9,
}

const flatSeventh: Interval = {
  name: 'Flat Seventh',
  notation: '\U+266D7',
  semitones: 10,
}

const seventh: Interval = {
  name: 'Seventh',
  notation: '7',
  semitones: 11,
}

const ninth: Interval = {
  name: 'Ninth',
  notation: '9',
  semitones: 14,
}

export const intervals = {
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
