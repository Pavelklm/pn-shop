/* eslint-disable max-len */
// HeaderSvgLogin.jsx

import React from 'react'

// Define the type for className prop
type HeaderSvgWishListProps = {
  className: string
}

// Define the component function
const HeaderSvgWishList: React.FC<HeaderSvgWishListProps> = ({ className }) => (
  <>
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={className}
        d='M16 24C16 24 25 20 25 13.714C25 10 22.9648 8 20.4543 8C19.2487 8 18.0925 8.49666 17.24 9.38071L16.7198 9.92016C16.3266 10.328 15.6734 10.328 15.2802 9.92016L14.76 9.38071C13.9075 8.49666 12.7513 8 11.5457 8C9 8 7 10 7 13.714C7 20 16 24 16 24Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
)

export default HeaderSvgWishList
