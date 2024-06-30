import React from 'react'
import {useState} from 'react'
import { useCreateMutation } from '../redux/api/contactApi';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'

const CreateContact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();


  const [create,{isLoading}] = useCreateMutation()

  const token = Cookies.get("token")

  const nav = useNavigate()
  const createHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, phone, address };
      const {data} = await create({data : user,token})
      console.log(data);
      console.log(user);
      if(data?.success) {
        nav(`/`)
      }
    } catch (error) {
      console.log(error);
    }
  };


    return (
    <div className="flex justify-center items-center h-screen">
    <form
      onSubmit={createHandler}
      className="w-96 flex flex-col gap-10 shadow-lg p-7"
    >
      <h2 className="text-gray-500 font-medium text-2xl">Create Contact</h2>
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
        type="text"
        placeholder="Enter your phone..."
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className=" rounded outline-none border-b border-b-teal-600 shadow-lg"
        type="text"
        placeholder="Enter your address"
      />

      <button disabled={isLoading && true}
        type="submit"
        className="rounded bg-blue-700 shadow-lg text-white px-4 py-1"
      >
        {isLoading? "Loading" : "Create Contact"}
      </button>
    </form>
  </div>
  )
}

export default CreateContact
