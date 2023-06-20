import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import Promotion from '../data-images/Promotion.svg'


const Home = () => {
 

  return (
    <div className='w-full bg-white border border-black-500 rounded-lg m-10'>
        <div className='flex justify-between'>
          <h2>Home</h2>
          <BsChevronDown />
        </div>
        <div className='flex'>
          <img src={Promotion} className='px-2 w-20 h-20' alt='' />
          <div>
            <h6>CYBER GANG</h6>
            <h6>Promo dev web Solicode 22/23 </h6>
          <div className='flex text-xs text-[#FF7A00] '>
            <h6>
               16 apprenants
            </h6>

            <h6>
               16 apprenantsINT - Maroc
            </h6>

            <h6>
              25/09/2022 
              24/08/2023
            </h6>

          </div>
          </div>
        </div>
    </div>
  )
}

export default Home