import React from 'react'
import figma from '../Assest/Image/figma.png'
const HeadContent = () => {
  return (
    <div className=' w-screen h[100%] flex flex-row justify-around align-middle  items-center'>
      <div className=' w-[20%] h-[70%] bg-transparent flex flex-col justify-around items-start'>
        <p className=' text-white text-xs font-semibold'>INSPIRATION TECHNOLOGY</p>
        <h1 className=' font-bold text-[4rem] text-white'>Runs faster</h1>
        <h2 className=' text-[2rem] text-white'>   Costs less and </h2>
        <h2 className=' text-[2rem] text-white mb-10'>never break </h2>
        <div className=' w-full h-[1px] bg-white'>
        <hr />
        </div>
        <p className=' text-white font-medium text-[15px] text-left pt-5 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fugiat.</p>
       <div className=' w-full flex flex-row gap-6'>

            <button className=' h-[62px] w-[169px] bg-[#FF5A05] font-medium text-x5  text-white '>Get started</button>
            <button className=' h-[62px] w-[169px] font-medium text-x5 text-white border-solid border-[#d1cfcf]  border-2  '>Free Trial</button>
       </div>
      </div>
       <img  className='w-[40%] mt-8' src={figma} alt="" />
          
    </div>
  )
}

export default HeadContent
   