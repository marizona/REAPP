import React from "react";
import house from "../images/house.png";

export default function Landing() {
  return (
    <div>
      <div class="grid gap-4 grid-cols-2 mt-52 rounded-lg bg-gray-200 shadow-xl p-6">
        
        
        <div className="box1">
          {" "}
          <h1 className="text-5xl font-black  text-purple-700  font-sans">
            Booking Done Right. Finally.
          </h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            sapiente inventore non voluptatum cum, enim, veniam nesciunt
            cupiditate nisi voluptas necessitatibus hic culpa veritatis? Minus
            numquam totam sunt quos itaque?
          </p>
          <div className="flex">
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


        <div className="box2">
          <img classname="w-96 h-96" src={house} alt="house" />
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
