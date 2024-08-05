'use client'
import React from 'react'

const RadioFemale = () => {
  return (
    <>
      <input type="radio" id='female' name='gender' className='hidden peer' />
      <label
        className='flex items-center justify-center p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-all duration-300  peer-checked:bg-red-300 peer-checked:border-transparent'
        htmlFor='female'>
        女性
      </label>
    </>
  )

}

export default RadioFemale