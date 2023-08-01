import React from 'react'
import tag1 from "../Assest/Image/tag1.png"
import tag2 from "../Assest/Image/tag2.png"
const Payment = () => {
  return (
    <div className=' bg-violet-300  h-[350px;] grid  place-items-center w-screen'>
     <h1 className=' text-[#05000B] font-bold text-[2rem] text-center'>Without Extra Charge Choose <br />Your Best Plan</h1>
       <div className=' bg-[#FFF] rounded-md h-[82px] w-[362px] flex justify-center items-center py-[10] gap-5 mt-5 '>
          <button className='  h-[52px] w-[140px] bg-[#FF5A05]  text-white text-x5 font-medium rounded-md '>Monthly</button>
          <button className='  h-[52px] w-[140px] bg-orange-200  text-[#FF5A05] text-x5 font-medium rounded-md  '>Yearly</button>
       </div>
      <div className=' flex justify-between items-center gap-[5rem] mt-14'>
           <img src={tag1} alt="" />
            <img src={tag2} alt="" />
       </div>
     
    </div>
  )
}

export default Payment
