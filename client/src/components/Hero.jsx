import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex px-[10%] sm:pt-[10%] sm:flex-col'>
        <div className='w-[50%] sm:w-full'>
            <h1 className='text-5xl font-bold w-[80%] sm:w-full'>
            Riparime të Shpejta dhe të Besueshme për Telefonat dhe PC-të!
            </h1>
            <p className='text-[gray] pt-5 w-[80%] sm:w-full'>
            Mirë se vini në Edi Shop, për riparime të shpejta dhe të besueshme për telefonat dhe PC-të. Teknikët tanë të përvojuar ofrojnë kthim të shpejtë dhe çmime konkurruese. Besoni te ne për pajisjet tuaja - teknologjia juaj meriton kujdesin më të mirë!
            </p>
            <br/>
            <br/>
            <a href="tel:+0675550809" target="_blank" className='bg-[black] text-white px-12 py-4 rounded-lg'>
                <button>067 555 0809</button>
            </a>
        </div>
        <div className='w-[50%] sm:w-full relative flex text-center justify-center'>
            <img src="../assets/hero.png" className='w-[60%] sm:py-[7%] sm:w-full heroImg ' alt="" />
        </div>
    </div>
  )
}

export default Hero