import "./App.css";
import { useEffect } from "react";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar.jsx";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./Components/EditProduct";


function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <main className>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path='/dashboard/product/:id/edit' element={<EditProduct/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
