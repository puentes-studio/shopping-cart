import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart.slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state);
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
    // console.log("removed");
  }

  return (
    <div>
      <div className="group flex bg-white flex-col items-center border-2 border-gray-500 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-5">
          <p className="text-gray-600 text-sm -mt-3 mb-1">$ {product?.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-cyan-500 hover:bg-cyan-600  text-white border-2 rounded-md font-bold px-4 py-1"
          >
            Add to cart
          </button>
          {cart.some((item) => item.id === product.id) && (
            <button
              onClick={handleRemoveFromCart}
              className="text-gray-500 text-xs mt-1"
            >
              {cart.some((item) => item.id === product.id)
                ? " Remove from cart"
                : " "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
