import React from 'react'
import ArroRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from "next/image"

const Header = () => {
  return (
    <header>
      <div className='flex justify-center items-center py-3 bg-black text-white text-sm '>
        <div className='flex justify-center items-center py-3 bg-black'>
          <p>get started for free</p>
          <ArroRight className='h-4 w-4 inline-flex justify-center items-center' />
        </div>
      </div>

      <div className='py-5'>
        <div className="container">
          <Image src={Logo} alt='logo' height={40} width={40} />

        </div>
      </div>
    </header>
  )
}

export default Header