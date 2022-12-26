import React from "react";
import { openModal } from "../features/Modal/modalSlice";

const Footer = (props) => {
  return (
    <footer>
      <hr className="my-4 mx-auto h-0.5 w-10/12 md:w-full  bg-gray-300" />
      <div className="flex items-center justify-around md:justify-between py-1 px-12">
        <h4 className="font-bold tracking-wider md:text-xl">Total</h4>
        <span className="font-bold tracking-wider md:text-xl">
          $ {props.total}
        </span>
      </div>
      <div className="flex items-center justify-center p-5">
        <button
          onClick={() => props.dispatch(openModal())}
          className="uppercase font-semibold tracking-widest text-sm px-8 py-1 bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
        >
          Clear cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;
