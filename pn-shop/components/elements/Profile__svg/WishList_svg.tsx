/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type WishListSvgProps = {
  className: string
}

// Define the component function
const WishListSvg: React.FC<WishListSvgProps> = ({ className }) => (
  <>
    <svg
      style={{ stroke: 'none' }}
      className={className}
      width='24.000000'
      height='24.000000'
      viewBox='0 0 24 24'
      fill='none'
      stroke='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <defs />
      <rect
        id='dashboard 2'
        width='24.000000'
        height='24.000000'
        fill='#FFFFFF'
        fillOpacity='0'
      />
      <path
        className={className}
        id='Vector'
        d='M11.99 5.58C18 -2 32 10 11.99 21.05C-8 10 6 -2 11.99 5.58Z'
        stroke='#CCCCCC'
        strokeOpacity='1.000000'
        strokeWidth='1.500000'
      />
    </svg>
  </>
)

export default WishListSvg
