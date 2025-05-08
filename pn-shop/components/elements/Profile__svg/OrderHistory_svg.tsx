/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type OrderHistorySvgProps = {
  className: string
}

// Define the component function
const OrderHistorySvg: React.FC<OrderHistorySvgProps> = ({ className }) => (
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
        <clipPath id='clip354_15191'>
          <rect
            id='OrderHistory 2'
            width='24.000000'
            height='24.000000'
            fill='white'
            fillOpacity='0'
          />
        </clipPath>
      </defs>
      <rect
        id='OrderHistory 2'
        width='24.000000'
        height='24.000000'
        fill='#FFFFFF'
        fillOpacity='0'
      />
      <g clipPath='url(#clip354_15191)'>
        <path
          className={className}
          id='Vector'
          d='M4 20L4 13L11 13L7.78 16.21C8.33 16.78 8.98 17.22 9.71 17.53C10.43 17.83 11.21 17.99 12 18C13.23 17.99 14.44 17.61 15.45 16.89C16.47 16.18 17.23 15.16 17.64 14L17.66 14C17.77 13.67 17.86 13.33 17.92 13L19.93 13C19.69 14.93 18.75 16.71 17.29 18C15.83 19.28 13.94 20 12 20L11.99 20C10.93 20 9.89 19.79 8.92 19.39C7.95 18.99 7.07 18.4 6.33 17.66L4 20ZM6.07 11L4.06 11C4.3 9.06 5.24 7.29 6.7 6C8.16 4.71 10.04 4 11.99 4L12 4C13.05 3.99 14.09 4.2 15.06 4.6C16.03 5 16.91 5.59 17.65 6.33L20 4L20 11L13 11L16.22 7.78C15.67 7.21 15.01 6.77 14.29 6.46C13.56 6.15 12.78 6 12 6C10.76 6 9.55 6.38 8.54 7.1C7.52 7.82 6.76 8.83 6.35 10L6.33 10C6.21 10.32 6.13 10.66 6.07 11L6.07 11Z'
          fill-opacity='1.000000'
          fill-rule='nonzero'
        />
      </g>
    </svg>
  </>
)

export default OrderHistorySvg
