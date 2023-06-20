import React from 'react';
import Logo from '../data-images/Logo.svg'

const NavBar = () => {
  return (
    <div className='bg-white h-16 flex items-center justify-between px-2 lg:px-5'>
      <div className='flex gap-2 lg:gap-2'>
        <img src={Logo} />
      </div>
    </div>
  )
}

export default NavBar