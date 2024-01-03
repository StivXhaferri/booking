import React from 'react'

const Services = () => {
  return (
    <div className='w-full px-[10%] py-10' id='services'>
        <h2 className=' text-2xl bg-[rgb(185,255,102)] inline-block'>SERVISET</h2>
        <br />
        <p className='text-[gray] w-[50%] sm:w-full pt-5'>
        Edi Shop ofron riparime të specializuara për pajisje aparative, shitjen e pajisjeve (të reja/të rikonstruktura) dhe zgjidhje softuerike për nevojat tuaja teknologjike.
        </p>

        <div className="cards w-full flex gap-10 sm:flex-col justify-between mt-10">
            <div className='w-[50%] sm:w-full flex-grow'>
                <div className="card1 h-full flex-grow sm:flex-col w-full mx-auto bg-[#B9FF66] border-2 border-black rounded-3xl p-16 flex items-center">
                    <div className='w-[50%] sm:w-full'>
                        <h2 className='text-black text-3xl bg-white inline-block font-semibold'>
                        Riparime Hardware & 
                        <br/>
                        Software
                        </h2>
                        <br/>
                        <div className='w-full flex  sm:hidden  gap-5 pt-[15%] items-center'>
                            <a href="#devices" className='flex items-center gap-5'>
                            <img src="../assets/arrow1.png" alt="" />
                            <p className='text-2xl'>Learn more</p>
                            </a>
                            
                        </div>
                    </div>
                    <div className='w-[50%] sm:w-full text-center flex justify-center p-3'>
                        <img src="../assets/service1.svg" className='w-[70%]'  alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%]  sm:w-full fle-grow '>
                <div className="card1  h-full flex-grow sm:flex-col w-full mx-auto bg-[black] border-2 border-black rounded-3xl p-12 flex items-center">
                    <div className='w-[50%] sm:w-full'>
                        <h2 className='text-black text-3xl bg-[#B9FF66] inline-block font-semibold'>
                        Distribucion 
                        <br/>
                        i paisjeve
                        Elektronike 
                        </h2>
                        <br/>
                        <div className='w-full flex sm:hidden gap-5 pt-[15%] items-center'>
                            <a href="#devices" className='flex items-center gap-5'>
                            <img src="../assets/arrow2.png" alt="" />
                            <p className='text-2xl text-white'>Learn more</p>
                            </a>
                        </div>
                    </div>
                    <div className='w-[50%] text-center flex sm:w-full justify-center p-3'>
                        <img src="../assets/service2.svg" className='w-[70%]'  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services