import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import {login} from "../actions/userActions.js"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Signin() {
  const dispatch = useDispatch();
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')


  const userLogin = useSelector((state) => state.userLogin)

   const { loading, error, userInfo } = userLogin


 const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    toast(error)
    
  }

if (userInfo) return <Navigate to="/" /> ;


  return (
    <div className="lg:container lg:mx-auto lg:max-w-7xl">
         {loading && <Loader />}
      
      <div className=" mx-auto lg:mt-64 md:mt-34 max-w-sm p-4 bg-white  shadow-2xl rounded-lg  sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        
           
        <form className="space-y-6" onSubmit={submitHandler}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h3>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
        
            className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          
            Login to your account
          </button>
            
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
