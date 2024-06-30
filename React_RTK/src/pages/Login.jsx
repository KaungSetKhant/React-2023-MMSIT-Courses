import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/services/authSlice';


const Login = () => {
  const [email, setEmail] = useState("1234acb@gmail.com");
  const [password, setPassword] = useState("123456789");

  const [login] = useLoginMutation()

  const nav = useNavigate()

  const loginHandler = async(e) => {
    try{

      e.preventDefault()
      const user = {email,password}
      const data =await login(user)
      dispatch(addUser({user : data?.user, token : data?.token}))
      console.log(data)
      console.log(user)
      if(data?.success){
        nav("/")
      }
    }catch(error){
      console.log(error)
    }
  }

  const dispatch = useDispatch()

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={loginHandler}
        className="w-96 flex flex-col gap-10 shadow-lg p-7"
      >
        <h2 className="text-gray-500 font-medium text-2xl">Login</h2>
       
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
          type="password"
        />
       
       
        <div className="flex gap-3">
          <p className="select-none text-gray-500">Does not have an Account?</p>
          <Link to="/register">
            <p className="cursor-pointer select-none text-teal-700">Register</p>
          </Link>
        </div>
       
        <button
          type="submit"
          className="rounded bg-blue-700 shadow-lg text-white px-4 py-1"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
