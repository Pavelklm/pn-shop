/* eslint-disable max-len */
type AdventageSvgBoxProps = {
  className: string
}

const Advantage__svg__box: React.FC<AdventageSvgBoxProps> = ({ className }) => (
  <>
    <svg
      width='72.000000'
      height='72.000000'
      viewBox='0 0 72 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <clipPath id='clip242_19529'>
          <rect
            id='package'
            width='36.000000'
            height='36.000000'
            transform='translate(18.000000 18.000000)'
            fill='white'
            fill-opacity='0'
          />
        </clipPath>
        <pattern
          id='pattern_242_195300'
          patternContentUnits='objectBoundingBox'
          width='1.000000'
          height='1.000000'
        >
          <use
            xlinkHref='#image242_19530_0'
            transform='matrix(0.004464,0,0,0.004464,0,-0.053571)'
          />
        </pattern>
        <image
          id='image242_19530_0'
          width='224.000000'
          height='248.000000'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
      <rect
        id='Icon'
        rx='36.000000'
        width='72.000000'
        height='72.000000'
        fill='url(#pattern_242_195300)'
        fill-opacity='1.000000'
      />
      <rect
        id='package'
        width='36.000000'
        height='36.000000'
        transform='translate(18.000000 18.000000)'
        fill-opacity='0'
      />
      <g clip-path='url(#clip242_19529)'>
        <path
          className={className}
          id='Vector'
          d='M52.55 26.48C52.55 26.35 52.52 26.21 52.46 26.08C52.34 25.82 52.1 25.65 51.84 25.59L36.37 18.09C36.12 17.96 35.82 17.96 35.57 18.09L19.94 25.66C19.64 25.81 19.44 26.11 19.42 26.45L19.42 26.46C19.42 26.47 19.42 26.47 19.42 26.49L19.42 45.5C19.42 45.85 19.62 46.17 19.94 46.32L35.57 53.9C35.58 53.9 35.58 53.9 35.58 53.9C35.61 53.91 35.63 53.92 35.65 53.93C35.66 53.93 35.67 53.94 35.68 53.94C35.71 53.95 35.73 53.96 35.75 53.96C35.76 53.96 35.77 53.97 35.78 53.97C35.8 53.98 35.83 53.98 35.85 53.99C35.86 53.99 35.87 53.99 35.87 53.99C35.9 53.99 35.94 54 35.97 54C36 54 36.04 54 36.07 53.99C36.08 53.99 36.09 53.99 36.09 53.99C36.12 53.99 36.15 53.98 36.17 53.97C36.18 53.97 36.19 53.96 36.19 53.96C36.22 53.96 36.24 53.95 36.26 53.94C36.27 53.94 36.28 53.93 36.29 53.93C36.31 53.93 36.34 53.92 36.36 53.9C36.37 53.9 36.37 53.9 36.37 53.9L52.05 46.3C52.36 46.15 52.57 45.83 52.57 45.48L52.57 26.5C52.55 26.5 52.55 26.49 52.55 26.48ZM35.96 19.92L49.52 26.49L44.53 28.91L30.97 22.34L35.96 19.92ZM35.96 33.06L22.41 26.49L28.88 23.35L42.44 29.92L35.96 33.06ZM21.25 27.96L35.05 34.65L35.05 51.62L21.25 44.92L21.25 27.96ZM36.88 51.62L36.88 34.65L43.36 31.5L43.36 35.94C43.36 36.44 43.77 36.85 44.27 36.85C44.77 36.85 45.18 36.44 45.18 35.94L45.18 30.62L50.73 27.93L50.73 44.89L36.88 51.62Z'
          fill-opacity='1.000000'
          fill-rule='nonzero'
        />
      </g>
    </svg>
  </>
)

export default Advantage__svg__box