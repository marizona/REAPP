import "./App.css";
import Covid from "./Components/Covid";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import LocationGrid from "./Components/LocationGrid";
import NavBar from "./Components/NavBar.jsx";
import Testimony from "./Components/Testimony";


function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <div className="lg:container lg:mx-auto lg:px-64">
      <LocationGrid/>
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

export default App;
