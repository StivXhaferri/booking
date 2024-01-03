import React from 'react'

const Devices = () => {
  return (
    <div className='py-12 px-[10%]' id='devices' >
            
           <div className='w-full flex mt-[5%] sm:flex-col'>
                
                <div className='w-[50%] sm:w-full pt-[10%]'>
                    <h2  className='text-6xl font-bold bg-[#B9FF66] inline-block'>
                        Pasijet
                    </h2>
                    <br/>
                    <br/>
                    <p className='text-[gray] w-[90%] sm:w-full text-xl'>
                    Në Edi Shop, përdorim teknologji të avancuar për të zbuluar dhe riparuar me shpejtësi dhe saktësi problemet në pajisjet tuaja. Makinat tona moderne janë të pajisura për të identifikuar dhe adresuar problemet në mënyrë efikase, duke siguruar një proces riparimi të pa pengesa. Nga mjete diagnostikuese deri te pajisjet e avancuara, investojmë në teknologjinë më të fundit për të ofruar një shërbim cilësor. Besoni te Edi Shop për një qasje moderne dhe të saktë në zgjidhjen e problemeve të pajisjeve tuaja. Teknologjia juaj, përmirësuar me tonat.
                    </p>
                </div>
                <div className='w-[50%] sm:w-full flex text-start justify-start'>
                    <img src="../assets/devices.svg" className='pt-12 w-[80%] mt-[5%]  mx-auto' alt="" />
                </div>
           </div>
        </div>
  )
}

export default Devices