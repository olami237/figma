import React from 'react'
import sol from '../Assest/Image/sol.png'
import tik from '../Assest/Image/tik.png'
const SimpleSol = () => {
  return (
    <div className=' flex items-center justify-center mt-[4rem] h-[fit-content] py-[3rem] gap-[5rem]'>
      <div className=' p-[2rem]'>
        <img className=' w-[80rem]' src={sol} alt="" />
      </div>
      <div className=' grid mb-[7rem]'>
        <p className='   text-2xl font-bold text-[orange]'>Lorem ipsum dolor sit ame</p>
        <h1 className='   font-extrabold text-[2.4rem]'>Simple Solutions for <br /> Complex Connections</h1>
        <h6 className=' font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed donec <br /> gravida feugiat neque, ipsum faucibus.  Pharetra vel suspendisse mi  odio a velit feugiat sapien.</h6>
        <div className=' flex gap-10 mt-3'>
         <span className=' flex  gap-3 font-bold text-[1rem]'><img src={tik} alt="" /><h5 className='  '>High Analysis</h5></span>
        <span className='flex gap-3 text-[1rem] font-bold'><img src={tik} alt="" /> <h5  className=''>Certified Institute</h5></span> 
        </div>
        <button className='  h-[62px] w-[169px] bg-[#FF5A05]  text-white text-x5 font-medium rounded-md mt-4'>Learn More</button>
      </div>
    </div>
  )
}

export default SimpleSol
