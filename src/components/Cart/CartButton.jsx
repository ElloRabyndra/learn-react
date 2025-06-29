export default function CartButton({ onToggleCart, cartCount }) {
  return (
    <button
      onClick={onToggleCart}
      className="absolute text-4xl cursor-pointer top-3 right-22"
    >
      <i className="bx bx-cart text-primary"></i>
      <i className="absolute z-10 text-sm -top-0 -right-2">{cartCount}</i>
    </button>
  );
}
