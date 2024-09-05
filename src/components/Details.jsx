import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-[80%] h-[100%] shadow-lg shadow-black  m-auto flex justify-center items-center gap-7 p-[8%]'>
                <img className='object-cover bg-slate-500 h-[83%]   ' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  />
                <div className='w-[50%]'>
                    <h1 className='mb-3 font-sans font-semibold text-wrap text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                    <h2 className='mb-3 font-sans text-zinc-400 text-xl font-medium'>men's clothing</h2>
                    <h3 className='mb-3 font-sans text-red-500 text-xl font-medium'>$ 109.95</h3>
                    <h4 className='mb-3 font-sans font-medium'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h4>
                    <br />
                    <Link className="text-red-500 mr-3 mb-3 font-sans font-semibold border-gray-400 border-2 px-3 py-2 ">Edit</Link>
                    <Link className="text-red-500 font-sans font-semibold border-gray-400 border-2 px-3 py-2 ">Delete</Link>
                </div>
        </div>
    </div>
  )
}

export default Details
