import React from 'react'

function Navbar() {
  return (
    <div>
        <div  className='flex items-center gap-2  justify-between py-4 text-white'>
      <div >
        <img src="brand_logo.png" alt="logo" />
      </div>
      <ul className='flex items-center gap-8 text-black'>
        <li>menu</li>
        <li>About</li>
        <li>Contact</li>
        <li>location</li>
      </ul>
      <div><button className='bg-red-600 mr-3 pr-1 rounded-lg w-20'>login</button></div>
      </div>
    </div>
  )
}

export default Navbar