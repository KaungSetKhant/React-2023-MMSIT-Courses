import React from "react";
import { useContactQuery } from "../redux/api/contactApi";
import Cookies from "js-cookie";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { addContacts, setSearchTerms } from "../redux/services/contactSlice";

const ContactTable = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useContactQuery();
  console.log(data?.contacts?.data);

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactSlice.contacts)
  const searchTerms = useSelector(state => state.contactSlice.searchTerms)


  useEffect(() => {
    dispatch(addContacts(data?.contacts?.data))
  },[data])


  if (isLoading) {
    return (
      <div className=" flex justify-center h-screen items-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  const rows =  contacts?.filter((item) => {
    if(searchTerms === ""){
      return item
    }else if(
      item?.name.toLowerCase().includes(searchTerms?.toLocalLowerCase())
    ){
      return item
    }
  }).map((contact) => {
    return (
      <tr key={contact?.id}>
        <td>{contact?.name}</td>
        <td>
          {contact?.email === null
            ? "example@gmail.com"
            : contact?.email}
        </td>
        <td>{contact?.phone}</td>
        <td>
          {contact?.address === null
            ? "example@gmail.com"
            : contact?.address}
        </td>
      </tr>
    );
  })


  return (
    <>
    <div className="flex gap-5 items-center">
      <Link to={`/create`}>
      <button className=" bg-blue-500 text-white px-6 py-1 my-5">Create Contact</button>
      </Link>
      <input type="text" placeholder="Search" value={searchTerms} onChange={(e) => dispatch(setSearchTerms(e.target.value))} className=" px-6 py-1 outline-none" />
    </div>

      <div className="mt-20 my-8">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactTable;
