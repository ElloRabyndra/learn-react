import Loading from "../Service/Loading";
import ProductCard from "./ProductCard";

export default function ProductsList({ products, loading, onAddToCart }) {
  return (
    <div className="mt-5">
      {/* Product list */}
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="pl-2">No Product found.</p>
      )}
    </div>
  );
}
