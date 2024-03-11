import React from 'react'

function Logo({width = '100px', className=''}) {
  return (
    <div className='text-3xl font-bold px-3 py-2 bg-zinc-500 rounded-lg border border-zinc-600'>
      <h1>BLOGG</h1>
    </div>
  )
}

export default Logo