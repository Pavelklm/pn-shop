/* eslint-disable max-len */
import React from 'react'

type HeaderSvgShopingCartProps = {
  className: string
}

const HeaderSvgShopingCart: React.FC<HeaderSvgShopingCartProps> = ({
  className,
}) => (
  <>
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 15V15.01M20 15V15.01M12 12H20M12 12C9 12 8 15.8899 8 17.5C8 23.5259 9.60338 24.5 16 24.5C22.3966 24.5 24 23.5259 24 17.5C24 15.8899 23 12 20 12M12 12V11C12 8.79086 13.7909 7 16 7C18.2091 7 20 8.79086 20 11L20 12'
        stroke='#1A1A1A'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </>
)

export default HeaderSvgShopingCart
