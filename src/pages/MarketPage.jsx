import { useState, useContext } from "react";
import { useProducts } from "../components/Hooks/useProducts";
import { ThemeContext } from "../context/ThemeContext";
import ToggleButton from "../components/theme/ToggleButton";
import CartButton from "../components/Cart/CartButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import ProductsList from "../components/Cart/ProductsList";
export default function MarketPage() {
  const { theme } = useContext(ThemeContext);
  const { products, loading, url, setUrl } = useProducts();
  
  const handleAddToCart = (product) => {};

  const handleCartButtonClick = () => {};

  return (
    <section className={`${theme} flex min-h-screen p-8 font-[Poppins]`}>
      <Button className="absolute top-5 left-6">
        <Link className="flex items-center gap-2 md:text-xl" to="/">
          <i className="bx bx-arrow-back"></i> Back
        </Link>
      </Button>
      <ToggleButton />
      <CartButton />
      <div className="w-full px-2 mt-12 space-y-4">
        <h1 className="text-2xl font-bold text-center">Simple Market Place</h1>
        {/* Products List */}
        <ProductsList products={products} loading={loading} onAddToCart={handleAddToCart} />
      </div>
    </section>
  );
}
