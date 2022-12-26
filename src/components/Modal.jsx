import React from "react";
import { clearCart } from "../features/Cart/cartSlice";
import { closeModal } from "../features/Modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-10 fixed top-0 left-0 w-full h-full z-10 display flex items-center justify-center shadow-2xl">
      <div className="bg-slate-300 p-10 text-center rounded-2xl shadow-2xl">
        <h4 className="tracking-wide font-semibold">
          Remove all items from your shopping cart?
        </h4>
        <div className="py-6">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type="button"
            className="px-6 py-0.5 rounded-lg bg-blue-400 hover:bg-blue-600  text-slate-100 "
          >
            confirm
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="button"
            className="px-6 py-0.5 ml-2 rounded-lg bg-red-400 hover:bg-red-600 text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
