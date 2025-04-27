import React from 'react'
import Heading from '../componenets/Heading'
const Contact = () => {
  return (
    <div className='bg-[url(public/contact.webp)] bg-no-repeat bg-cover'>
    <Heading message={"Write to Us"} color="text-white" />
   <form className=" flex flex-col gap-5 w-[50%] m-auto">
    <label className='block text-white'>Name</label>
     <input type="text" placeholder='First Name'  className='bg-white h-25 w-1/1'/>
     <label className='block text-white'>Your Email</label>
     <input type="text" placeholder='Your@email.com  '  className='bg-white h-25 w-1/1'/> 
     <label className='block text-white'>Namblocke</label>
     <textarea rows={20} cols={300} placeholder='First Name'  className=' bg-white h-25 w-1/1'/>
      <label className='text-white'>Information</label>  
      <input type="check-box" /> <span className='text-white'>I consent to the processing of my personal data</span>
      <input type="submit" value={"SEND"} className='bg-slate-900 text-xl text-white py-7' />  
   </form>
    </div>
  )
}

export default Contact