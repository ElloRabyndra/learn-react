import React, { useState } from "react";
import EmptyCover from "../Service/EmptyCover";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function ProductCard({ product, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleClickCart = (product) => {
    onAddToCart(product);
  };

  // Format harga dengan currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // Potong title jika terlalu panjang
  const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  // Jangan render card jika gambar error
  if (imageError) {
    return null;
  }

  return (
    <div className="relative w-60 md:w-52">
      <Card className="flex flex-col h-full p-0 overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        {/* Image Section */}
        <div className="relative w-full h-48">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
          ) : (
            <EmptyCover />
          )}

          {/* Loading state */}
          {!imageLoaded && !imageError && (
            <div className="flex items-center justify-center w-full h-48 bg-gray-200 animate-pulse">
              <span className="text-sm text-gray-500">Loading...</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-4">
          {/* Brand */}
          {product.brand && (
            <p className="mb-1 text-xs uppercase tracking-wide-500">
              {product.brand}
            </p>
          )}

          {/* Title */}
          <h3 className="mb-2 text-sm font-medium leading-tight">
            {truncateTitle(product.title)}
          </h3>

          {/* Price Section */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={() => handleClickCart(product)}
            type="submit"
            className="w-full transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </div>
  );
}
