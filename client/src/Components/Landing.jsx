import React from "react";
import house from "../images/house.jpg";

export default function Landing() {
  return (
    <div className="max-w-screen-xl mt-52 px-8 xl:px-16 mx-auto bg-gray-100 shadow rounded-lg">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          {" "}
          <h1 className=" text-6xl lg:text-3xl xl:text-5xl font-medium text-purple-900 leading-normal">
            Booking Done Right.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            sapiente inventore non voluptatum cum, enim, veniam nesciunt
            cupiditate nisi voluptas necessitatibus hic culpa veritatis? Minus
            numquam totam sunt quos itaque?
          </p>
          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined"> Get Started</button>
        </div>

        <div className="flex w-full">
          <div className="h-full w-full">
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
              <img
                className=" rounded-lg "
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
                src={house}
                alt="house"
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
