import React from 'react'

const SubscribeNow = () => {
  return (
    <div className='mb-7 px-12 md:px-0'>
       <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='flex flex-col gap-3'>
        <h1 className=' text-center text-3xl font-medium text-gray-800'>
    Subscribe now & get 20% off
    </h1>
    <p className='text-center text-gray-500'>Get the latest tech deals, updates, and exclusive offers — straight to your inbox</p>
    </div>
        <div className='flex justify-center items-center max-w-2xl w-full md:h-14 h-12'>
        <input type="email" placeholder='Enter your email id' className='px-3 h-full w-full  border-[1px] border-gray-400'/>
        <button className='bg-orange-500 px-8 h-full md:px-12 text-white font-medium rounded-tr-xs rounded-br-xs'>Subscribe</button>
        </div>
       </div>
    </div>
  )
}

export default SubscribeNow
