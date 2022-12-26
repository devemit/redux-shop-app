import React from "react";
import { CartIcon } from "../data/Icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  console.log(amount);
  return (
    <nav className="py-5 md:px-16 mx-auto bg-blue-800 flex items-center justify-around md:justify-between">
      <ul>
        <a className="font-bold text-3xl md:text-4xl text-white" href="#">
          <span className="text-blue-400">mi</span>
        </a>
      </ul>
      <div className="flex text-white">
        <CartIcon />
        <span className="px-2 font-semibold text-lg">{amount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
