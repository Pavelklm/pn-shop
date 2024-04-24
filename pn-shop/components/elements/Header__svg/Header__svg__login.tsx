/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type HeaderSvgLoginProps = {
  className: string
}

// Define the component function
const HeaderSvgLogin: React.FC<HeaderSvgLoginProps> = ({ className }) => (
  <>
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.5 25.0001H10.5C9.11929 25.0001 8 23.8808 8 22.5001C8 18.4194 14 18.5001 16 18.5001C18 18.5001 24 18.4194 24 22.5001C24 23.8808 22.8807 25.0001 21.5 25.0001Z'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
)

export default HeaderSvgLogin
