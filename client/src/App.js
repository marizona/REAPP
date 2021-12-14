import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar.jsx";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
