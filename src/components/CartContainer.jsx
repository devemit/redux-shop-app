import React from "react";
import CartItem from "./CartItem";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <>
        <h1 className="p-10 tracking-wider font-semibold uppercase text-3xl text-gray-700 flex items-center justify-center ">
          Your Bag
        </h1>
        <h1 className=" flex items-center justify-center tracking-wider text-xl text-gray-500">
          is currently empty... 😞
        </h1>
      </>
    );
  }

  return (
    <>
      <section className="p-10">
        <header className="text-3xl">
          <h2 className="flex items-center justify-center font-semibold uppercase mb-10 text-gray-700 tracking-wider">
            Your Bag
          </h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </section>
      <Footer total={total.toFixed(2)} dispatch={dispatch} />
    </>
  );
};

export default CartContainer;
