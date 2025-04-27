import React from 'react'
import assets from '../assets/assets'

const Home = () => {
  return (
    <div>
        <div className=' flex bg-grey-100 h-150'>
            <div className=' pr-5 pt-20 basis-1/2 text-right content-center flex justify-center flex-col gap-10 '>
                <h1 className=' text-7xl  font-bold '>Let us inspire you</h1>
                <p className='text-2xl'>We help companies achieve ambitious goals</p>
                <div className=" text-3xl justify-end flex gap-3">
                    <div className= " w-50 text-white p-3 bg-slate-900  text-center content-center text-xl">
                        Consultation
                    </div>
                    <div className=" w-50 border p-3 border-slate-900 text-center content-center text-xl">
                        Offer
                    </div>
                </div>
            </div>
            <div className='basis-1/2'>
                <img src={assets.main} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home