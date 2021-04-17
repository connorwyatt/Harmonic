import { Note } from '../Note'
import { notes } from '../constants/notes'
import { calculateSemitones, formatNote } from './noteHelpers'

interface TestData {
  from: Note
  to: Note
  expectedSemitones: number
}

const testData: TestData[] = [
  {
    from: notes.c,
    to: notes.c,
    expectedSemitones: 0,
  },
  {
    from: notes.c,
    to: notes.b,
    expectedSemitones: 11,
  },
  {
    from: notes.g,
    to: notes.c,
    expectedSemitones: 5,
  },
]

testData.forEach(({ from, to, expectedSemitones }) => {
  test(`it should calculate the semitones from ${formatNote(from)} to ${formatNote(to)}`, () => {
    expect(calculateSemitones(from, to)).toEqual(expectedSemitones)
  })
})
