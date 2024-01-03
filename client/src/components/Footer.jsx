import React from 'react'



const Footer = () => {






    return(
        <div className='bg-[#191A23] w-[80%] sm:w-full mx-auto p-3 mt-[5%]' style={{borderRadius: '25px 25px 0px 0px'}}>
            <div className='flex items-center w-full sm:flex-col'>
                <div className='w-[30%] sm:w-full sm:text-center'>
                <h2 className='bg-[#B9FF66] text-black font-bold inline-block ml-[25%] sm:mx-auto'>
  EDI-SHOP.AL
</h2>
                </div>
                <div className='w-[40%] flex gap-3 py-3 sm:w-full sm:flex-col sm:text-center'>
                    <a href="#services" className='text-[white] text-sm'>Services</a>
                    <a href="#choose" className='text-[white] text-sm'>Why Choose US</a>
                    <a href="#about" className='text-[white] text-sm'>About US</a>
                    <a href="#devices" className='text-[white] text-sm' >Devices</a>
                    <a href="#faq" className='text-[white] text-sm' >FAQ</a>
                    <a href='https://wa.me/0675550809' target='_blank' className='text-[white] text-sm' >Contact US</a>
                </div>
                <div className='w-[30%] flex items-center gap-3 sm:w-full sm:gap-5 sm:py-3 sm:flex sm:text-center justify-center'>
                    
                    <img src="/socials/facebook.svg" className='w-[5%] sm:w-[10%]' alt="" />
                    
                        <img src="/socials/instagram.svg" className='w-[5%] sm:w-[10%]'  alt="" />
                   
                    <img src="/socials/wp.svg" className='w-[5%] sm:w-[10%]' alt="" />
                </div>
            </div>
            <div className='flex w-full px-12 sm:flex-col'>
                <div className='w-[40%] flex-col flex-grow gap-2 sm:w-full sm:text-center' >
                    <h2 className='text-black bg-[#B9FF66] inline-block my-4'>CONTACT</h2>
                    <h2 className='text-white py-3'>Email:email@info.com</h2>
                    <h2 className='text-white py-3'>Phone: 067 555 0809</h2>
                    <h2 className='text-white py-3'>Address: Adasdasdasdasdsadsadsadsdsasa</h2>
                </div>
                <div className='w-[60%] flex gap-5 justify-center items-center sm:flex-col sm:text-center sm:w-full sm:justify-center  sm:mt-[5%] '>
                    <a href="">
                        <button className='border-2 border-white rounded-lg text-white font-semibold px-12 py-4 sm:mx-auto sm:w-full '>MAIL US</button>
                    </a>
                    <a href='https://wa.me/0675550809' target='_blank'>
                    <button className='border-2   border-[#B9FF66]   bg-[#B9FF66] rounded-lg text-[black] font-semibold sm:mx-auto sm:w-full px-12 py-4'>CHAT</button>
                    </a>
                    
                </div>
            </div>
            <div className='bg-white w-[95%] mx-auto my-10 p-[0.5px]'></div>
            <div className='flex py-2'>
                <div>
                    <p className='text-white pl-12'>
                    © 2023 Positivus. All Rights Reserved.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}


export default Footer;