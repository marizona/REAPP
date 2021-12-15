import React from "react";

export default function Covid() {
  return (
    <section className="flex flex-row p-32  justify-center  items-center flex-grow">
      <div>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        <svg
          className=" h-12 w-12 mr-3 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="text-5xl px-auto font-bold align-middle">
          <span>
            {" "}
            Rent Safely
            <br /> During
          </span>
          <span className="text-purple-600 animate-pulse">COVID-19</span>
        </h1>
        </div>
        <div className="align-middle px-auto">
        Rentberry is the first real estate platform that offers a fully
          digital rental journey. It automates all the standard rental tasks
          making the whole experience contact-free. From submitting personal
          information, credit reports, and rent negotiation using the custom
          offer feature to conducting virtual tours, eSigning rental agreements,
          and sending maintenance requests. All of it can be done in one place,
          hassle-free, and with no face-to-face contact.
        </div>
    
   
       
    
    </section>
  );
}
