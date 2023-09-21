import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { setToggleSidebar } from "../features/viewSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((state) => state.view.toggle_sidebar);
  return (
    <div
      onClick={() => {
        dispatch(setToggleSidebar(!toggleSidebar));
      }}
      className="lg:hidden bg-blue-600 p-3 rounded-full fixed top-3 right-3 shadow-2xl z-[99]"
    >
      {toggleSidebar ? (
        <ImCross className="text-xl text-white" />
      ) : (
        <HiMenuAlt3 className="text-2xl text-white" />
      )}
    </div>
  );
};

export default ToggleSidebar;
