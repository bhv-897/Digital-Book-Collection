import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex mb-4'>
      <Link 
        to={destination}  
        className='group flex items-center justify-center gap-2 text-gray-300 hover:text-white px-4 py-2 w-fit bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 transition-all duration-300 shadow-md hover:shadow-lg'
      >
        <BsArrowLeft className='text-xl group-hover:-translate-x-1 transition-transform'/>
        <span className="text-sm font-medium">Back</span>
      </Link>
    </div>
  )
}

export default BackButton