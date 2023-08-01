import React from 'react'
import double from '../Assest/Image/double.png'
import page from '../Assest/Image/page.png'
import vector from '../Assest/Image/Vector.png'
import vector2 from '../Assest/Image/Vector 2.png'
import figma5 from "../Assest/Image/figma5.png"
const UserReview = () => {
  const firstPic ={
    postion : "relative",
    left : "6rem",
    zIndex : "2",
  }

  
const secondPics ={
  postion : "relative",
  left : "2rem",
  zIndex : "1",
}

const qouteStyle ={
 postion : "relative",
 left : "-5rem",
 bottom : "8rem",
 zIndex : "2",
}



  return (
    <div className=' grid place-items-center p-[3rem]'>
     <div className=' grid place-items-center w-[20rem]'>
       <h1 className=' text-[2rem] font-bold '>UserReview</h1>
       <h1 className=' mt-[0.5rem] text-[0.7rem] font-medium text-center'>Collaborate over projects with your team and clients optimised <br /> for mobile and tablet don't let slow</h1>
     </div>
     <span className=' flex items-center pt-[3rem]'>
       <div style={firstPic}>
        <h2 className=' text-[1.5rem] font-semibold '> What people say About Us</h2>
        <img className='  w-[35rem]' src={page} alt="" />
        <span className=' flex  items-center gap-[1rem] justify-center  '>
            <div className=' bg-[#FF5a05] p-[1rem] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]'>
               <img className=' w-[1rem]' src={vector} alt="" />
            </div>
            <div className=' bg-[#FF5a05] p-[1rem]  rounded-tr-[50%] rounded-br-[50%] rounded-tl-[50%]'>
              <img className=' w-[1rem]' src={vector2} alt="" />
            </div>
         </span>
      </div>
      <img style={secondPics} className=' w-[20rem] mr-10' src={figma5} alt="" />
      <div style={qouteStyle} className=' bg-[blue] p-[1.6rem] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] relative '>
         <img className=' w-[3.5rem]' src={double} alt="" />
      </div>
  
     </span>
    </div>
  )
}

export default UserReview
