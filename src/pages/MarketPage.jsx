import { useState, useEffect, useContext } from "react";
import { useProducts } from "../components/Hooks/useProducts";
import { ThemeContext } from "../context/ThemeContext";
import ToggleButton from "../components/theme/ToggleButton";
import CartButton from "../components/Cart/CartButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ProductsList from "../components/Cart/ProductsList";
import CartNav from "@/components/Cart/CartNav";
export default function MarketPage() {
  const { theme } = useContext(ThemeContext);
  const { products, loading, url, setUrl } = useProducts();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      const newCart = {
        id: product.id,
        title: product.title,
        brand: product.brand,
        image: product.image,
        price: product.price,
        quantity: 1,
      };
      setCart([...cart, newCart]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    const sum = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(sum);
  }, [cart]);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className={`${theme} flex min-h-screen p-8 font-[Poppins]`}>
      <Button className="absolute top-5 left-6">
        <Link className="flex items-center gap-2 md:text-xl" to="/">
          <i className="bx bx-arrow-back"></i> Back
        </Link>
      </Button>
      <ToggleButton />
      <CartButton
        onToggleCart={handleToggleCart}
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <div className="w-full px-2 mt-12 space-y-4">
        <h1 className="text-2xl font-bold text-center">Simple Market Place</h1>
        {/* Products List */}
        <ProductsList
          products={products}
          loading={loading}
          onAddToCart={handleAddToCart}
        />
      </div>
      <CartNav
        isCartOpen={isCartOpen}
        onToggleCart={handleToggleCart}
        cart={cart}
        setCart={setCart}
        totalPrice={totalPrice}
      />
    </section>
  );
}
