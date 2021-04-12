import {
  ElementStatesColors,
  FlattenSimpleInterpolation,
  css,
} from 'styled-components'

export const elementStatesColors = ({
  active,
  focus,
  hover,
  normal,
}: ElementStatesColors): FlattenSimpleInterpolation => {
  return css`
    color: ${normal};

    &:hover {
      color: ${hover};
    }

    &:focus {
      color: ${focus};
    }

    &:active {
      color: ${active};
    }
  `
}

export const allElementStatesColors = (color: string): FlattenSimpleInterpolation =>
  elementStatesColors({
    active: color,
    focus: color,
    hover: color,
    normal: color,
  })
