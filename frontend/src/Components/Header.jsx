import React from 'react'
import { Avatar } from '../assets/assets'

const Header = ({ textColor }) => {
  return (
    <header className="mb-6">
      <img 
        src={Avatar}
        alt="Avatar" 
        className="w-16 h-16 rounded-full border border-white/20 shadow-lg"
      />
      <h1 className={`mt-5 text-2xl press-start-2p-regular ${textColor}`}>Ayush Sahoo</h1>
      <h3 className='text-[11px] mt-2'>developer·designer</h3>
    </header>
  )
}

export default Header
