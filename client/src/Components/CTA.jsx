import React from "react";

export default function CTA() {
  return (
    <div>
      <section className="bg-purple-400 text-center p-20">
        <h1 className="text-3xl text-white font-bold">Searching for an Apartment?</h1>
        <p className="text-center text-white text-xl p-10">
          Your perfect home is waiting for you on Rentberry.
          Browse thousands<br/> ofapartments worldwide,
           negotiate terms and prices, sign lease<br/> online,
          and communicate with your landlord
           right on your laptop or <br/>smartphone.
        </p>
        <button className="bg-yellow-500 py-3 text-white px-20 text-lg rounded-md shadow-3xltext-white font-bold">Sign Up for Free</button>
      </section>
    </div>
  );
}
