import React from 'react'

const Tile = ({icon, title, body}) => {
  return (
    <div  className='h-1/1 flex flex-col justify-center gap-5 p-10 bg-gray-200 backdrop-blur-3xl'>
        <div className=' cg text-slate-900'>{icon}</div>
        <h1 className='text-xl font-bold '>{title}</h1>
        <p className='text-lg font-medium'>{body}</p>
    </div>
  )
}

export default Tile