import React from 'react'

const Header = ({ textColor, changePalette }) => {
  return (
    <header className="mb-6">
      <button onClick={ changePalette } className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-transform transform hover:rotate-180">
        {/* Optional icon or text inside */}
      </button>
      <h1 className={`mt-10 text-2xl press-start-2p-regular ${textColor}`}>Ayush Sahoo</h1>
      <h3 className='text-[11px] mt-2' >developer·designer </h3>
    </header>
  )
}

export default Header
