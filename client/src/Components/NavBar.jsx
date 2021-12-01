import logo from '../images/logo.jpg'

function NavBar() {
    return (
      <>
        {/*Nav bar */}
        <nav className="fixed top-0 backdrop-filter backdrop-blur-lg z-10 bg-opacity-30  drop-shadow-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                {/*Logo*/}
                <div>
                  <ul className="flex items-center py-5 px-2">
                    <svg
                      className="w-10 h-10 mr-1 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      ></path>
                    </svg>
                    <span className="font-bold">Better chick</span>
                  </ul>
                </div>
                {/* items 1*/}
                <div className="hidden md:flex items-center space-x-8">
                  <ul className="py-5 px-3 hover:text-gray-500">Features</ul>
                  <ul className="py-5 px-3 hover:text-gray-500">Pricing</ul>
                </div>
              </div>
  
              {/* items 2*/}
              <div className="hidden md:flex items-center space-x-8">
                <ul className="py-3 px-3">Login</ul>
                <ul className=" text-white py-3 px-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-extrabold rounded transition duration-300">
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
  
        {/* test content */}
        <div className="flex flex-col content-center items-center">
          <img
            className="backdrop-opacity-20 mx-570"
            alt="background"
            src={logo}
          />
          {/* <div class="absolute z-40 justify-center w-80 pt-3 ml-auto  bottom-1 rounded bg-blue-400 text-white text-center leading-4">this is a text</div> */}
        </div>
  
        {/*search*/}
        <div className="flex flex-col items-center bottom-64 sticky">
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
        </div>
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