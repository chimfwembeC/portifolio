import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-l from-gray-700 to-orange-800'>        
        <div className="container mx-auto text-white">
        <div className="block justify-center items-center gap-4 text-red-500">
            <RiErrorWarningFill size={250} />
        </div>
        <span className='text-xl'>The requested page does'nt exist</span>
        <div className="w-full text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos vel vero, deleniti corporis totam provident praesentium similique 

        </div>
        </div>
    </div>      
  )
}
