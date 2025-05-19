/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type HeaderSvgSearchProps = {
  className: string
}

// Define the component function
const HeaderSvgSearch: React.FC<HeaderSvgSearchProps> = ({ className }) => (
  <>
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24 24L19.8033 19.8033M22 14.5C22 10.3579 18.6421 7 14.5 7C10.3579 7 7 10.3579 7 14.5C7 18.6421 10.3579 22 14.5 22C18.6421 22 22 18.6421 22 14.5Z'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
)

export default HeaderSvgSearch
