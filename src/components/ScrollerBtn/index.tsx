import React from 'react'


const ScrollerBtn = () => {
  return (
    <div className={`h-10 w-5 flex justify-center p-1 items-end border-2 border-purple-700 rounded-lg absolute bottom-8 left-1/2`}>
        <span className='w-2 h-2 bg-purple-700 animate-bounce block rounded'></span>
    </div>
  )
}

export default ScrollerBtn