import react from 'react'


const About = () => {
    return(
        <div className='py-12 px-[10%]' id='about' >
           <h2 className='text-2xl bg-[rgb(185,255,102)] inline-block'>KUSH JEMI NE?</h2> 
           <div className='w-full flex mt-[5%] sm:flex-col '>
                <div className='w-[50%] sm:w-full flex text-start justify-start'>
                    <img src="../assets/about.svg" className='pt-12 w-[80%] mt-[5%]  mx-auto' alt="" />
                </div>
                <div className='w-[50%] sm:w-full pt-[10%]'>
                    <h2  className='text-5xl font-bold bg-[#B9FF66] inline-block'>
                        EDI-SHOP
                    </h2>
                    <br/>
                    <br/>
                    <p className='text-[gray] w-[90%] sm:w-full text-xl'>
                    Që nga 2004, Edi Shop ka shënuar një udhëtim nga një garazh i thjeshtë në një qendër të respektuar për riparimet e telefonave. Angazhimi ynë në inovacion dhe teknologji na bën zgjedhjen e besueshme. Nga një biznes individual te një ekip i specializuar, ne ofrojmë riparime të shpejta, çmime transparente, dhe një trashëgimi të shkëlqimit. Zgjidhni Edi Shop për eksperiencën e riparimeve, e nisur nga historia dhe pasioni për teknologjinë - ekspertiza jonë që nga 2004.
                    </p>
                </div>
           </div>
        </div>
    )
}


export default About