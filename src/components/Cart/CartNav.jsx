import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Card } from "../ui/card";
import CartList from "./CartList";
export default function CartNav({
  isCartOpen,
  onToggleCart,
  cart,
  setCart,
  totalPrice,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <Card
      className={`${theme} ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 bottom-0 w-80 p-4 z-50 shadow-2xl bg-zinc-100 rounded-r-none overflow-y-auto`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold"> My Cart</h1>
        <button className="text-3xl cursor-pointer" onClick={onToggleCart}>
          <i className="bx bx-x"></i>
        </button>
      </div>
      {cart.length === 0 && <p className="text-center">Your cart is empty</p>}
      {cart.map((item) => (
        <CartList key={item.id} item={item} setCart={setCart} />
      ))}
      {cart.length > 0 && (
        <p className="-mt-8 font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
      )}
    </Card>
  );
}
