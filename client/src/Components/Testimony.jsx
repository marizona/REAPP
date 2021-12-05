import React from 'react'
import testimony1 from "../images/testimony1.jpeg";

export default function Testimony() {
    return (
        <div className=''>
        <section className="flex flex-cols-2 py-40 align-middle ">
           <section className=''>
            <h1 className=" text-5xl font-bold ">
            Testimony
            </h1>
            <div className='flex gap-4 py-4 justify-center opacity-50'>
            <img className='rounded-full h-16 w-16'src={testimony1} alt="" />
            <img className='rounded-full h-16 w-16'src={testimony1} alt="" />
            <img className='rounded-full h-16 w-16'src={testimony1} alt="" />
            </div>
            </section>
          <div>
            <p className="px-12 text-xl">
              <em>Rentberry is the first real estate platform that offers a fully
              digital rental journey. It automates all the standard rental tasks
              making the whole experience contact-free. From submitting personal
              information, credit reports, and rent negotiation using the custom
              offer feature to conducting virtual tours, eSigning rental agreements,
              and sending maintenance requests. All of it can be done in one place,
              hassle-free, and with no face-to-face contact.</em>{" "}
            </p>
          </div>
        </section>
        </div>
    )
}
