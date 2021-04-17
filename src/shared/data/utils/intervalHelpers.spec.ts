import { Interval } from '../Interval'
import { Note } from '../Note'
import { intervals } from '../constants/intervals'
import { notes } from '../constants/notes'
import { calculateNote } from './intervalHelpers'
import { formatNote } from './noteHelpers'

interface TestData {
  root: Note
  interval: Interval
  expectedNote: Note
}

const testData: TestData[] = [
  {
    root: notes.c,
    interval: intervals.majorThird,
    expectedNote: notes.e,
  },
  {
    root: notes.c,
    interval: intervals.minorThird,
    expectedNote: notes.eFlat,
  },
  {
    root: notes.eFlat,
    interval: intervals.fifth,
    expectedNote: notes.bFlat,
  },
  {
    root: notes.e,
    interval: intervals.ninth,
    expectedNote: notes.fSharp,
  },
  {
    root: notes.dFlat,
    interval: intervals.seventh,
    expectedNote: notes.c,
  },
  {
    root: notes.gSharp,
    interval: intervals.fourth,
    expectedNote: notes.cSharp,
  },
]

testData.forEach(({ root, interval, expectedNote }) => {
  test(`it should calculate the ${interval.name} for ${formatNote(root)}`, () => {
    expect(calculateNote(root, interval)).toEqual(expectedNote)
  })
})
