/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type DashboardSvgProps = {
  className: string
}

// Define the component function
const DashboardSvg: React.FC<DashboardSvgProps> = ({ className }) => (
  <>
    <svg
      className={className}
      width='24.000000'
      height='24.000000'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs>
        <clipPath id='clip354_15209'>
          <rect
            id='dashboard 2'
            width='24.000000'
            height='24.000000'
            fill='white'
            fillOpacity='0'
          />
        </clipPath>
      </defs>
      <rect
        id='dashboard 2'
        width='24.000000'
        height='24.000000'
        fill='#FFFFFF'
        fillOpacity='0'
      />
      <g clipPath='url(#clip354_15209)'>
        <path
          className={className}
          id='Vector'
          d='M19 21L10 21C9.46 21 8.96 20.78 8.58 20.41C8.21 20.03 8 19.53 8 19L8 15L10 15L10 19L19 19L19 5L10 5L10 9L8 9L8 5C8 4.46 8.21 3.96 8.58 3.58C8.96 3.21 9.46 3 10 3L19 3C19.53 3 20.03 3.21 20.41 3.58C20.78 3.96 21 4.46 21 5L21 19C21 19.53 20.78 20.03 20.41 20.41C20.03 20.78 19.53 21 19 21ZM12 16L12 13L3 13L3 11L12 11L12 8L17 12L12 16Z'
          fill='#CCCCCC'
          fillOpacity='1.000000'
          fillRule='nonzero'
        />
      </g>
    </svg>
  </>
)

export default DashboardSvg
