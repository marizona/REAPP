import React from "react";
import Covid from "../Components/Covid";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Landing from "../Components/Landing";
import LocationGrid from "../Components/LocationGrid";

import Testimony from "../Components/Testimony";

function Home() {
  return (
    <div>
    <div className="lg:container lg:mx-auto lg:max-w-7xl">
      <Landing />
      <LocationGrid/>

      </div>
      <div className="bg-gray-50 shadow-xl">
      <Covid/>
      </div>
      
      <CTA/>
      <div className="lg:container lg:mx-auto lg:px-64">
        <Testimony/>
      
      </div>

     <Footer/>
    </div>
  );
}

export default Home;
