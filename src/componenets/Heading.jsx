import React from 'react'

const Heading = ({message,color}) => {
  return (
    <div className={`text-4xl font-medium py-10 text-center ${color}`}>{message}</div>
  )
}

export default Heading