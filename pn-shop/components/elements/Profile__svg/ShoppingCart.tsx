/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type ShoppingCartSvgProps = {
  className: string
}

// Define the component function
const ShoppingCartSvg: React.FC<ShoppingCartSvgProps> = ({ className }) => (
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
      <defs />
      <path
        className={className}
        id='Rectangle'
        d='M21 21L3 21L5 10L8 10L16 10L19 10L21 21ZM8 10L8 7C8 4.79 9.79 3 12 3C14.2 3 16 4.79 16 7L16 10M8 10L8 13M16 10L16 13'
        strokeOpacity='1.000000'
        strokeWidth='1.500000'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
    </svg>
  </>
)

export default ShoppingCartSvg
