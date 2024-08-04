import React from 'react'
import ArroIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]'>
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Lorem ipsum dolor sit amet.
          </div>
          <h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Lorem, ipsum dolor.</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, molestias. Reprehenderit hic corporis quo sapiente debitis quibusdam mollitia commodi cumque.</p>
          <div className='flex gap-1 items-center mt-[30px]'>
            <button className='btn btn-primary'>Lorem, ipsum</button>
            <button className='btn btn-text gap-1'>
              <span className="test">Lorem, ipsum</span>
              <ArroIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-20">
          <Image src={cogImage} alt='Cog Image'/>
        </div>
      </div>
    </section>
  )
}

export default Hero