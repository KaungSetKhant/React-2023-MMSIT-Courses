import React from "react";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeUser } from "../redux/services/authSlice";

const Navbar = () => {
  //   const { user } = useSelector((state) => state.authSlice);
  //   const { token } = useSelector((state) => state.authSlice);
  //   console.log(user);
  //   console.log(token);
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");

  const [logout] = useLogoutMutation();

  const nav = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    if (data?.success) {
      nav("/login");
    }
    console.log(data);
  };

  return (
    <div className="flex justify-around p-7 shadow items-center">
      <h2 className="text-2xl text-gray-700 font-semibold">MMS</h2>

      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-3">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <button
          onClick={logoutHandler}
          className=" bg-red-500 text-white px-4 py-1 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
