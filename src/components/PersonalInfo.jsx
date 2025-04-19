import React from 'react'
import { Link } from 'react-router-dom'

const PersonalInfo = () => {
  return (
    <div className="flex flex-col items-center gap-8 justify-start h-full text-white w-full max-w-[30rem] px-4 sm:px-0">
      <h1 className='text-5xl lg:text-6xl font-bold md:text-4xl'>
        <span className='underline underline-offset-4'>Pe</span>rsonal Info
      </h1>

      <div className='flex flex-col gap-4'>
        <p className='text-base md:text-2xl'>
          <span className='font-bold'>Birthdate</span>: 3rd February, 2004
        </p>
        <p className='text-base md:text-2xl'>
          <span className='font-bold'>Email</span>: 
          <Link to="mailto:aroraaryan997@gmail.com" className='text-blue-400 hover:underline ml-1'>
            aroraaryan997@gmail.com
          </Link>
        </p>
        <p className='text-base md:text-2xl'>
          <span className='font-bold'>Phone</span>: +91 9289641150
        </p>
        <p className='text-base md:text-2xl'>
          <span className='font-bold'>Address</span>: 33, F block NIT-3, Faridabad,<br /> Haryana, India
        </p>
      </div>
    </div>
  )
}

export default PersonalInfo
