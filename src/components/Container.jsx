import React from 'react'

function Container() {
  return (

    <div className='h-screen w-full flex items-center justify-between px-16'>

      
      <div>

        <div className='flex flex-col items-start justify-center'>

          <h1 className='font-bold text-8xl  leading-[90px] w-[600px]'>
            YOUR FEET DESERVE THE BEST
          </h1>

          <p className='pt-6 w-[450px]'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className='pt-3.5'>
            <button className='bg-red-600 text-amber-50 border-2 w-29 h-10 cursor-pointer'>
              Shop now
            </button>

            <button className='bg-amber-50 border ml-2 h-9.5 w-30 cursor-pointer'>
              category
            </button>
          </div>

        </div>

        <div className='pt-4'>
          <p>Also Available On</p>
        </div>

        <div className='flex pt-2 gap-4'>
          <img src="amazon.png" alt="" />
          <img src="flipkart.png" alt="" />
        </div>

      </div>

      
      <div className='flex justify-center items-center'>
        <img src="shoe_image.png" alt="" className='w-[500px]' />
      </div>

    </div>

  )
}

export default Container