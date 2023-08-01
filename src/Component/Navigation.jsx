import React from 'react'
import nav from "../Assest/Image/nav.png"

const Navigation = () => {
  return (
    <div className=' w-full h-10 flex justify-around align-middle '>
        <img src={nav} alt="" />
        <ul className=' flex flex-row gap-5 text-base text-[2rem] text-white  '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonal</li>
        <li>Pricing</li>
        </ul>
        <button className=' h-[62px] w-[162px] bg-[#FF5A05] rounded-md font-medium text-x5 text-white' >Get Started</button>
    </div>
  )
}

export default Navigation
