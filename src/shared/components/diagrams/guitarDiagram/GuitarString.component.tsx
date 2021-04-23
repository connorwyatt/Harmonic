import { FC } from 'react'

export interface Props {
  x: number
  width: number
}

export const GuitarString: FC<Props> = ({ x, width }) => {
  const guitarStringGradientId = `guitarStringGradient-${x}-${width}`
  return (
    <>
      <defs>
        <linearGradient
          id={guitarStringGradientId}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop
            offset='0%'
            style={{
              stopColor: 'rgb(50, 50, 50)',
              stopOpacity: 1,
            }}
          />
          <stop
            offset='50%'
            style={{
              stopColor: 'rgb(100, 100, 100)',
              stopOpacity: 1,
            }}
          />
          <stop
            offset='100%'
            style={{
              stopColor: 'rgb(50, 50, 50)',
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <rect
        x={x - (width / 2)}
        y={0}
        width={width}
        height='100%'
        fill={`url(#${guitarStringGradientId})`}
        stroke='rgb(255, 255, 255)'
        strokeWidth={0.5}
        style={{ filter: 'drop-shadow(3px 0 5px rgba(0, 0, 0, .25))' }}
      />
    </>
  )
}
