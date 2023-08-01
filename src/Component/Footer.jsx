import React from 'react'
import nav from '../Assest/Image/nav.png'
import bird from '../Assest/Image/bird.png'
import fb from '../Assest/Image/fb.png'
import ig from '../Assest/Image/ig.png'
import vied from '../Assest/Image/vied.png' 
const Footer = () => {
  return (
    <div className=' bg-[#000848] h-[337.673px] w-screen grid grid-cols-4 place-items-center '>
      <div className=' '>
        <img src={nav} alt="" />
        <div className=' flex justify-around items-center '>
        <img src={fb} alt="" />
        <img src={bird} alt="" />
        <img src={ig} alt="" />
        <img src={vied} alt="" />
        </div>
      </div>
      <div className=' text-white font-bold leading-10'>
      <h5>SHORT LINKS</h5>
      <h5>Home</h5>
      <h5>Services</h5>
      <h5>Screenshots</h5>
      <h5>contact</h5>

      </div>
      <div className=' text-white font-bold leading-10'>
      <h5>HELP LINK</h5>
      <h5>How to download</h5>
      <h5>How it work</h5>
      <h5>Video tutorial</h5>
      <h5>FAQ</h5>
      </div>
      <div className=' text-white font-bold leading-10'>
        <h5>SHORT LINKS</h5>
        <h5>Google Play Store</h5>
        <h5>Apple App Store</h5>
        <h5>Download Directly</h5>
      </div>
    </div>
  )
}

export default Footer
