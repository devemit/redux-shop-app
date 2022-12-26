import React from "react";
import { ChevronDown, ChevronUp } from "../data/Icons";
import { removeItem, increase, decrease } from "../features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex items-center justify-evenly  md:justify-between mx-auto py-6">
      <div className="flex items-center justify-center">
        <img
          className="w-20 h-20 md:w-52 md:h-52 object-cover"
          src={img}
          alt={title}
        />
        <div>
          <h4 className="font-semibold tracking-wider px-1 md:text-2xl">
            {title}
          </h4>
          <h1 className="text-gray-500 px-1 md:text-xl">$ {price}</h1>
          <button
            onClick={() => {
              dispatch(removeItem(id));
            }}
            className="text-blue-400 px-1 md:text-xl"
          >
            remove
          </button>
        </div>
      </div>

      <div className="">
        <button
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="px-2">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
