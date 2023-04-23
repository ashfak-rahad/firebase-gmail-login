import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };
  const handleSubmit =(event)=>{
    event.preventDefault();
    const email =event.target.email.value;
    const password =event.target.password.value;
    console.log(email,password)
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}><h3 className="text-3xl block text-center font-semibold">Pleace Register</h3>
        <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Passord"
        />
        <br />
        <input className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
