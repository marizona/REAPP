import React from 'react'

function PropertyCard() {
    return (
        <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div className="bg-white rounded-lg mt-5">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="h-60 rounded-md" alt="" />
        </div>
        <div className="bg-white shadow-lg rounded-lg -mt-4 w-1/5">
          <div className="py-8 px-5">
             <div className="text-sm text-gray-500 font-semibold pr-3"><span className="text-md text-green-600 font-semibold bg-green-300 py-0.5 px-2.5 rounded-full mr-3">AVAILABLE</span> 3 BEDS • 2 BATHS</div>
            <span className="font-bold text-gray-800 text-lg">Modern home in city center</span>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-light"><span className="text-lg text-black">$1,400</span> /wk</div>
              <div className="text-2xl text-red-600 font-bold"></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PropertyCard
