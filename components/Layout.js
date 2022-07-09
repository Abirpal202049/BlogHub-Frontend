import React from 'react'

export default function Container({children}) {
  return (
    <div className="container mx-auto bg-gray-800 text-white flex flex-wrap p-5 flex-col md:flex-row items-center">
        {children}
    </div>
  )
}
