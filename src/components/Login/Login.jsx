import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(email, password);
    setError('');
    setSuccess('')
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
    signInWithEmailAndPassword(auth,email,password)
    .then(result =>{
     const loggedUser =result .user;
     setSuccess('User login successful.');
     setError('');
    })
    .catch(error =>{
        setError(error.message)
    })
  };
  return (
    <div>
      <Form onSubmit={handleLogin}>
        <div className="flex justify-center items-center h-screen bg-indigo-600">
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold">Login</h1>
            <hr className="mt-3" />
            <div className="mt-3">
              <label className="block text-base mb-2" htmlFor="username">
                User Email
              </label>
              <input
                type="email"
                id="email"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Email"
                required
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
                placeholder="Enter Password"
                required
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
              <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
                Login Now
              </button>
            </div>
            <p><small>New to this Website? Please <Link  to="/new">Register</Link> </small></p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
