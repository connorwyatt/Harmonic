import { FC } from 'react'

export interface Props {
  backgroundColor: string
  textColor: string
  x: number
  y: number
}

export const Annotation: FC<Props> = ({ children, backgroundColor, textColor, x, y }) =>
  (
    <g>
      <circle
        cx={x}
        cy={y}
        r={25}
        fill={backgroundColor}
        style={{ filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, .5))' }}
      />
      <text
        x={x}
        y={y}
        fill={textColor}
        textAnchor='middle'
        alignmentBaseline='middle'
      >
        {children}
      </text>
    </g>
  )
