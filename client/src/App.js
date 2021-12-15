import "./App.css";
import { useEffect } from "react";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar.jsx";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { loadUser } from "./Redux/actions/authActions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
