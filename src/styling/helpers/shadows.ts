import {
  DefaultTheme,
  FlattenSimpleInterpolation,
  ShadowStyle,
  css,
} from 'styled-components'

export const boxShadow = (theme: DefaultTheme, {
  blur,
  xOffset,
  yOffset,
}: ShadowStyle): FlattenSimpleInterpolation => {
  const shadowColor = theme.colors.shadows

  return css`
    box-shadow: ${xOffset} ${yOffset} ${blur} ${shadowColor};
  `
}
