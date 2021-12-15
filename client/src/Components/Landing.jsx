

export default function Landing() {
  return (
    <div className="bg-background bg-contain bg:animate-pulse max-w-screen-xl mt-44 lg:p-32 px-8 xl:px-16 mx-auto lg:b shadow-2xl xl:lg:bg-gray-200 rounded-lg ">
      <div className="grid grid-flow-row-reverse sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 ">
        <div className=" px-16 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          {" "}
          <h1 className="text-4xl font-bold lg:text-5xl xl:text-7xl pb-12">
            {" "}
            Booking Done
            <strong> Right.</strong> Finally
          </h1>
        <div className="">
        <input
            placeholder="Where do you want to live?"
            className="shadow-xl placeholder:text-2xl px-6 py-4 "
          ></input>
          <button className="btn btn-green ml-2 ">search</button>
          </div>        
         
        </div>

        <div className="flex w-full rounded-lg">
          <div className="h-full w-full rounded-lg">
            <div
              style={{
                display: "block",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: "0",
              }}
            >
              <div
                style={{
                  display: "block",
                  boxSizing: "border-box",
                  paddingTop: "62.58169934640523%",
                }}
              ></div>
              <div
                className="bg-logo bg-contain  bg-no-repeat rounded-lg"
                style={{
                  visibility: "visible",
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "borderBox",
                  padding: "0px",
                  border: "medium none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>

    
      </div>
            
      
      

      {/* .card{
  background:white;
  width:330px;
  margin:30px;
  border-radius:15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor:pointer; */}
      {/* image background
        <div className="flex flex-col content-center items-center">
          <img
            className="relative bg-no-repeat bg-cover filter blur-sm backdrop-opacity-20 mx-570"
            alt="background"
            src={logo}
          />
          <div className='absolute'>
          <h1 className=" text-6xl font-black text-blue-700 animate-bounce font-sans py-12">
            Booking Done Right. Finally.
          </h1>
          <div className="flex py-0">
            <button className="shadow-2xl bg-opacity-25  bg-black text-white py-3 px-10 text-xl rounded-t-lg focus:bg-white focus:text-gray-500">
              Book
            </button>
            <button className="shadow-2xl bg-opacity-25  bg-black text-white py-3 px-10 text-xl rounded-t-lg focus:bg-white focus:text-gray-500">
              Buy
            </button>{" "}
          </div>
          <input
            placeholder="Where do you want to live?"
            className="py-6 placeholder:text-2xl shadow-2xl rounded hover: px-40"
          ></input>
        </div>
        </div> */}
    </div>
    
  );
}
