import React from 'react'
import logo from '../images/logo.jpg'

export default function Landing() {
    return (
        <div>
             {/* test content */}
        <div className="flex flex-col content-center items-center">
          <img
            className="relative backdrop-opacity-20 mx-570"
            alt="background"
            src={logo}
          />
          {/* <div class="absolute z-40 justify-center w-80 pt-3 ml-auto  bottom-1 rounded bg-blue-400 text-white text-center leading-4">this is a text</div> */}
        </div>
  
        {/*search */}
        {/* <div className="flex flex-col items-center bottom-64 sticky">
          <h1 className="text-6xl font-black text-purple-900 font-sans py-6">
            Booking Done Right. Finally.
          </h1>
          <div className="flex py-0 sticky">
            <button className="shadow-2xl bg-opacity-25  bg-black text-white py-3 px-10 text-xl rounded-t-lg focus:bg-white focus:text-gray-500">
              Book
            </button>
            <button className="shadow-2xl bg-opacity-25  bg-black text-white py-3 px-10 text-xl rounded-t-lg focus:bg-white focus:text-gray-500">
              Buy
            </button>{" "}
          </div>
  
          <input
            placeholder="Where do you want to live?"
            className=" absolute mt-40 py-6 text-left placeholder:text-2xl shadow-2xl rounded hover: px-40"
          ></input>
        </div> */}
        </div>
    )
}
