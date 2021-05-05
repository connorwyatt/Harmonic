import { Note } from '../Note'
import { intervals } from '../constants/intervals'
import { calculateNote } from './intervalHelpers'

export const majorScale = (root: Note): Note[] => {
  return [
    root,
    calculateNote(root, intervals.second),
    calculateNote(root, intervals.majorThird),
    calculateNote(root, intervals.fourth),
    calculateNote(root, intervals.fifth),
    calculateNote(root, intervals.sixth),
    calculateNote(root, intervals.seventh),
  ]
}
