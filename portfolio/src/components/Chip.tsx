import React from 'react'

const Chip: React.FC<{ technology: string }> = ({ technology }) => {
  return (
    <div className='px-2 py-1 bg-earth-green rounded-xl'>
      <p className='font-poppins font-normal text-xs text-earth-white'>{technology}</p>
    </div>
  )
}

export default Chip
