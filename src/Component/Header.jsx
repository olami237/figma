import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'
const Header = () => {
  return (
    <div className=' w-screen h-[70vh] bg-gradient-to-r from-blue-700 to-blue-500 py-10  '>
     <Navigation/> 
     <HeadContent/>
    </div>
  )
}

export default Header
