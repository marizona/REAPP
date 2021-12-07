import React from "react";



export default function LocationGrid() {
  return (
    <div className="my-40">
        <div className='flex justify-center pb-20 '>
      <svg
        className="animate-bounce w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    
      </div>
      <section className="flex flex-col text-center flex-wrap">
        <h1 className="text-5xl font-bold">Featured Cities</h1>
        <h6 className="text-xl pt-8 pb-20">
          Discover thousands of apartments and homes for rent in 50+ countries{" "}
        </h6>
      </section>

      <section className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3  text-center gap-6">
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className=" transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        <div className="transform  bg-green-500 hover:bg-green-600 transition duration-500 hover:scale-110 cursor-pointer opacity-3 text-white rounded px-4 py-20  shadow-3xl">
          New York
        </div>
        
      </section>
    </div>
  );
}
