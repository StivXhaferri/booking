import React , {useState , useEffect} from 'react'

const Navbar = () => {



    const [open , setOpen] = useState(false)



  return (
    <>

    <div className="flex w-full fixed top-0 left-0 right-0 sm:hidden bg-white z-[999999]">
        <div className='w-[50%] py-4 pl-[10%] flex items-center justify-start'>
        <h2 className='bg-[#B9FF66] text-black font-bold'>
  EDI-SHOP.AL
</h2>

        </div>
        <div className='w-[50%] flex gap-4 py-2' >
            
            <a className='py-2' href="#services">Services</a>
            <a className='py-2' href="#choose" >Why Choose US</a>
            <a className='py-2'  href="#about" >About US</a>
            <a className='py-2'  href="#devices" >Devices</a>
            
            <a className='py-2' href="#faq" >FAQ</a>
            <a  className='border-2 border-black px-10 py-2 rounded-md' >SIGNIN</a>
            <a  className='  px-10 bg-[#B9FF66] py-2 rounded-md' >REGISTER</a>
            <a className='py-2'>
                <img src="../assets/moon.svg"  alt="" />
            </a>
        </div>
    </div>
    <div className='resnav hidden sm:flex flex-col  fixed top-0 left-0 right-0'>
        <div className='w-full flex p-2'>
            <div className='w-[33%] flex items-center'>
                <img src="../assets/open.svg" className='w-[50%] rounded-md shadow-lg' onClick={() => setOpen(true)}  alt="" />
            </div>
            <div className='w-[33%] flex items-center'></div>
            <div className='w-[33%] flex items-center justify-end text-end'>
                <img src="../assets/moon.svg"  alt="" />
            </div>

            
        </div>
        <div className="sidebar fixed transition-all 4s ease-in-out bg-black text-white w-full h-screen gap-10 p-3"  style={ open === true ? null  : {marginLeft : '-100vh'}}>
                <div className='w-full text-end flex justify-end'>
                    <img src="../assets/close.svg" className='w-[15%]' onClick={() => setOpen(false)} alt="" />
                </div>
                <div className='py-4'>  <h2 className='bg-[#B9FF66] p-2 inline-block text-3xl text-black font-bold'>
  EDI-SHOP.AL
</h2></div>
                <div className='py-4'><a href="#services" className='text-3xl'>Services</a></div>
                <div className='py-4'><a href="#choose" className='text-3xl'>Why Choose US</a></div>
                <div className='py-4'><a href="#about" className='text-3xl'>About US</a></div>
                <div className='py-4'><a href="#devices" className='text-3xl'>Devices</a></div>
                
                <div className='py-4'><a href="#faq" className='text-3xl'>FAQ</a></div>
                <div className='py-4'><a  className='text-3xl bg-[#B9FF66] text-black' href='https://wa.me/0675550809' target='_blank'>Contact US</a></div>
            </div>
    </div>
    </>
  )
}

export default Navbar