import { FC } from 'react'

export interface Props {
  y: number
  height: number
}

export const FretBar: FC<Props> = ({ y, height }) => {
  const fretBarGradientId = `fretBarGradient-${y}-${height}`
  const fretBarShadowId = `fretBarShadow-${y}-${height}`
  return (
    <>
      <defs>
        <linearGradient
          id={fretBarGradientId}
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            style={{ stopColor: 'rgb(100, 100, 100)', stopOpacity: 1 }}
          />
          <stop
            offset='50%'
            style={{ stopColor: 'rgb(150, 150, 150)', stopOpacity: 1 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: 'rgb(100, 100, 100)', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect
        x={0}
        y={y - (height / 2)}
        width='100%'
        height={height}
        fill={`url(#${fretBarGradientId})`}
        stroke='rgb(255, 255, 255)'
        strokeWidth={0.5}
        style={{ filter: 'drop-shadow(0 3px 5px rgba(0, 0, 0, .1))' }}
      />
    </>
  )
}
