import React from 'react'

const Choose = () => {
  return (
    <>
     <div className='w-full px-[10%] text-end sm:text-center' id='choose'>
        <h2 className='text-2xl bg-[#B9FF66]    inline-block'>PERSE TE NA ZGJIDHNI NE?</h2>
        
    </div>
    <div className="why bg-[#D9D9D9]  sm:flex-col flex gap-5 mt-[2%] px-[10%] py-12 w-full">
            <div className='w-[33%] sm:w-full  text-center flex-col'>
                <img src="../assets/why1.svg" className='w-[40%] mb-[2%] mx-auto' alt="" />
                <br/>
                <h2 className='text-2xl bg-[#B9FF66] inline-block'>Ekspertizë e provuar</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                Me kornizë kohore që kthehet në vitin 2004, Edi Shop sjell një ekspertizë të pa krahasuar në riparimet e telefonave. Ekipi ynë i përvojuar siguron kujdes të kualifikuar dhe të besueshëm për pajisjet tuaja."
                </p>
            </div>
            <div className='w-[33%]  sm:w-full text-center flex-col'>
                <img src="../assets/why2.svg" className='w-[40%] mx-auto' alt="" />
                <br/>

                <h2 className='text-2xl bg-[#B9FF66] inline-block'>Shërbim i orientuar nga klienti</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                
                Që nga fillimi, përvoja juaj ka qenë prioriteti ynë. Përqasja jonë ndaj klientit siguron riparime dhe përvojë pozitive, duke na bërë zgjedhjen tuaj të besueshme që nga viti 2004 për riparime të telefonave.
                </p>
               
            </div>
            <div className='w-[33%]  sm:w-full text-center flex-col'>
                <img src="../assets/why3.svg" className='w-[40%] pt-5 mx-auto' alt="" />
                <br/>
                <h2 className='text-2xl bg-[#B9FF66] inline-block'>Zgjidhje të shpejta</h2>
                <br/>
                <p className='text-black w-[85%] mx-auto mt-[5%]'>
                Koha ka rëndësi, dhe ne e kuptojmë këtë. Edi Shop siguron diagnoza efikase dhe riparime të shpejta, duke sjellë telefonin tuaj në performancën optimale në pak kohë
                </p>
                
            </div>
        </div>
    </>
   
  )
}

export default Choose