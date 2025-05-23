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
        <clipPath id='clip354_15186'>
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
      <g clip-path='url(#clip354_15186)'>
        <path
          className={className}
          id='Vector'
          d='M21 21L13 21L13 15L21 15L21 21ZM11 21L3 21L3 11L11 11L11 21ZM21 13L13 13L13 3L21 3L21 13ZM11 9L3 9L3 3L11 3L11 9Z'
          fillOpacity='1.000000'
          fill-rule='nonzero'
        />
      </g>
    </svg>
  </>
)

export default DashboardSvg
