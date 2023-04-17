import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../redux/features/restaSlice'

const Home = () => {
const dispatch= useDispatch()

const {resta_ar}=useSelector(
  (store)=>store.restaReducer
)
useEffect(()=>{
  dispatch(getRestaurants())
},[])
console.log(resta_ar);
  return (

    <div id="main-wraper">
    <div className="p-10 bg-gradient-to-r from-Slate-700 to-Sky-950">
      <div className="container mx-auto ">
        <div className="flex min-h-100px items-center justify-center">
          <div className="px-6 text-center text-black md:px-12">
            <p className="mb-4 text-2xl font-bold">
              Find your table for any occasion
            </p>
          </div>
        </div>
        <div className="relative mx-auto mb-4 flex max-w-[70%] flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="State, City or Town"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <button
            className="relative z-[2] flex items-center rounded-r bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-Cyan-400 hover:shadow-lg focus:bg-Cyan-400 focus:shadow-lg focus:outline-none focus:bg=whit active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <span>let's go</span>
          </button>
        </div>
      </div>
    </div>

      <div className="container py-6 gap-6 grid grid-cols-3 mx-auto ">
            <div className="card bg-base-100 shadow-xl w-0">
            <figure><img style={{width : "150px"}} src="https://image-tc.galaxy.tf/wijpeg-4z8fjv7bnp0dujenef6lp12xt/rooms-hero-1-optimised.jpg?width=1980&height=890" alt="Album" /></figure>
            <div className="card-body ">
              <h2 className="card-title">name</h2>
              <p><span>******</span> <span className="font-extrabold">|</span> <span>77 reviews</span> </p>
              <p><label></label> <span className="font-bold">$$$</span><span >$</span> <label>city</label> </p>
              <p className='font-extrabold' >ordered 3 times today</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Order new</button>
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Home