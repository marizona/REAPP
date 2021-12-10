function NavBar() {
  return (
    <>
      {/*Nav bar */}
      <nav className=" fixed w-full  top-0 backdrop-filter backdrop-blur-xl z-10 bg-opacity-50 drop-shadow-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/*Logo*/}
              <div>
                <ul className="flex items-center py-5 ">
                  <svg
                    className="w-10 h-10  border-2 mr-4  rounded-lg text-blue-500 p-2 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  <span className="font-bold">Rentify</span>
                </ul>
              </div>

              {/* items 1*/}
              <div className="hidden md:flex items-center space-x-8">
                <ul className="py-5 px-3 hover:text-gray-500 cursor-pointer">Features</ul>
                <ul className="py-5 px-3 hover:text-gray-500 cursor-pointer">Pricing</ul>
              </div>
            </div>

            {/* items 2*/}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="py-3 px-3 cursor-pointer">Login</ul>
              <ul className=" text-white py-3 px-3 btn btn-green cursor-pointer text-extrabold rounded transition duration-300">
                Signup
              </ul>
            </div>

            {/*mobile hamburger */}
            <div className="md:hidden flex items-center">
              <ul>
                <svg
                  class="w-8 h-8 color-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </ul>
            </div>

            {/*mobile menu  */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

/* FLEX
  <div classNameName="lg:container bg-green-400 xl:mx-auto">
        <div classNameName="flex gap-2 flex-wrap">
          <div classNameName="flex-initial font-sans bg-indigo-500 w-40 h-40 text-center text-gray-200 text-xl">
            FLEX1
          </div>
          <div classNameName="flex-initial font-sans bg-indigo-500 w-40 h-40 text-center text-gray-200 text-xl">
            FLEX1
          </div>
           <div classNameName="flex-initial font-sans bg-indigo-500 w-40 h-40 text-center text-gray-200 text-xl">
            FLEX1
          </div>
        </div>
      </div>*/

/*GRID    
      
      <div classNameName="lg:container bg-green-400 xl:mx-auto">
        <div classNameName="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ">
          <div classNameName='font-sans bg-yellow-300 w-full h-40 text-center text-xl'>
            Grid col-1
          </div>
          <div classNameName='font-sans bg-yellow-300 w-full h-40 text-center text-xl'>
            Grid col-2
          </div>
          <div classNameName='font-sans col-span-2 bg-yellow-300 w-full h-40 text-center text-xl'>
            Grid col-3
          </div>
          </div>
        </div> */
