import React from 'react';
import quantumLogo from '@/assets/logo-quantum.png'; // Assuming it's in the assets folder
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import acmeLogo from '@/assets/logo-acme.png'; // Corrected to match the actual file name
import Image from 'next/image';

const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <div className='flex gap-14 justify-between items-center'>
            <Image src={quantumLogo} alt='Quantum Logo' className='logo-ticker-image' />
            <Image src={echoLogo} alt='Echo Logo' className='logo-ticker-image' />
            <Image src={celestialLogo} alt='Celestial Logo' className='logo-ticker-image' />
            <Image src={pulseLogo} alt='Pulse Logo' className='logo-ticker-image' />
            <Image src={acmeLogo} alt='Acme Logo' className='logo-ticker-image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
