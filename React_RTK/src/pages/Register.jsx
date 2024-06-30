import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();

  const [register,{isLoading}] = useRegisterMutation();

  const nav = useNavigate();

  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      const data = await register(user);
      console.log(data);
      if (data?.success === true) {
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if(isLoading){
  //   return(
  //     <div className=" flex justify-center items-center h-screen">
  //       <h2>Loading...</h2>
  //     </div>
  //   )
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={registerHandler}
        className="w-96 flex flex-col gap-10 shadow-lg p-7"
      >
        <h2 className="text-gray-500 font-medium text-2xl">Register</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="text"
          placeholder="Enter your name..."
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="email"
          placeholder="Enter your email..."
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="password"
          placeholder="Enter your password..."
        />
        <input
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="password"
          placeholder="Confirm Password..."
        />
        <div className="flex gap-3">
          <p className="select-none text-gray-500">Already have an Account?</p>
          <Link to="/login">
            <p className="cursor-pointer select-none text-teal-700">Login</p>
          </Link>
        </div>

        <button disabled={isLoading && true}
          type="submit"
          className="rounded bg-blue-700 shadow-lg text-white px-4 py-1"
        >
          {isLoading? "Loading" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Register;
