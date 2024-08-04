'use client'
import React from 'react'

const RadioMale = () => {
  return (
    <>
      <input type="radio" id='male' name='gender' className='hidden peer' />
      <label
        className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-cyan-600 peer-checked:border-transparent'
        htmlFor='男性'>
        男性
      </label>
    </>
  )

}

export default RadioMale