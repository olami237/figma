import React from 'react'

const Input = () => {
  return (
    <div className=' bg-white h-[350px] mt-[40rem] flex justify-center items-center'>
        <div className=' bg-[#FDEEE7] rounded-md h-[300px] w-[750px] grid place-content-center '>
        <h4 className=' font-medium text-orange-300'>NEWSLETTER</h4>
        <h1 className=' text-black text-3xl font-bold'>We Offer Every Month 20% Off <br />For Our All Subscribers</h1>
        <div>
        <input className='  h-[52px] w-[372px] border-solid border-[#d1cfcf] border-2 bg-transparent' type="text"  />
        <button className=' h-[52px] w-[172px] bg-[#FF5A05] rounded-md font-medium text-x5 text-white'>Subscribe</button>
        </div>
        </div>
    </div>
  )
}

export default Input
