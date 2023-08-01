import React from 'react'
import fig1 from '../Assest/Image/fig1.png'
import fig2 from '../Assest/Image/fig2.png'
import fig3 from '../Assest/Image/fig3.png'
import fig4 from '../Assest/Image/fig4.png'
import fig5 from '../Assest/Image/fig5.png'
import fig6 from '../Assest/Image/fig6.png'
import fig7 from '../Assest/Image/fig7.png'

const ImageList = () => {
 const images = [
  fig1,
  fig2,
  fig3,
  fig4,
  fig5,
  fig6,
  fig7,
 ] 

 const mapped = images.map((e,i) => {
  return <span key={i} className=' w-[16rem] h-20 shadow grid place-items-center '><img src={e} alt="" /></span>
 })

 return(
  <div className=' flex flex-wrap justify-center gap-[2.5rem] mt-20'>
    {mapped}
  </div>
 )
 }
export default ImageList
