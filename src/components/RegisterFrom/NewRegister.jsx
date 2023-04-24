import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Form, Link } from "react-router-dom";
import app from "../firebase/firebase.init";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const auth = getAuth(app)

const NewRegister = () => {
  const[error,setError]=useState('');
  const [success,setSuccess]=useState('');

    const handleRegister = (event)=>{
        setSuccess('')
        setError('')
        event.preventDefault();
        const email =event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password)
        if(!/(?=.*[A-Z])/.test(password)){
          setError('Please two uppercase')
          return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
          setError('Please add at least two numbers')
          return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
          setError("Please add a Special character.");
          return;
        }
        else if (password.length<6){
          setError('Please add at least 6 character in your password')
          return;
        }
       
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          setError('');
          event.target.reset();
          setSuccess('Login has been Successfully')
        })
        .catch(error =>{
          console.log(error);
          setError(error.message);
          
        })
    }
  return (
   <div>
    <Form onSubmit={handleRegister}>
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          
          Register
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2" htmlFor="username">
            User Email
          </label>
          <input
            type="email"
            id="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email" required
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password" required
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="mt-3 flex ">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <div>
            <a className="text-indigo-800 font-semibold" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <p className="text-red-600">{error}</p>
        <p className="text-indigo-800">{success}</p>
        <div className="mt-5">
            <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Register Now</button>
        </div>
        <p><small>Already have an account? Please <Link to="/login">Login</Link> </small></p>
      </div>
    </div>
    </Form>
   </div>
  );
};

export default NewRegister;
