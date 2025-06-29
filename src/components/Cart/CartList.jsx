import { useState } from "react";
export default function CartList({ item, setCart }) {
  const handleIncrease = () => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const handleDecrease = () => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity > 0 ? product.quantity - 1 : 0,
            }
          : product
      )
    );
  };
  return (
    <div className="flex justify-between gap-2 mb-4 rounded-lg">
      <div className="flex gap-4">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="object-cover h-12 shadow-lg min-w-12 rounded-2xl"
          />
        </figure>
        <div className="space-y-2 text-sm w-36">
          <p className="font-semibold text-md">
            {item.title.substring(0, 20) + "..."}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <button
              className="px-3 py-1 rounded-lg cursor-pointer bg-primary"
              onClick={handleDecrease}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="px-3 py-1 rounded-lg cursor-pointer bg-primary"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center justify-between gap-8 max-w-max">
        <button
          className="text-2xl text-red-400 cursor-pointer"
          onClick={() =>
            setCart((prevCart) =>
              prevCart.filter((product) => product.id !== item.id)
            )
          }
        >
          <i className="bx bx-trash"></i>
        </button>
        <p className="font-semibold text-md">${item.price * item.quantity}</p>
      </div>
    </div>
  );
}
