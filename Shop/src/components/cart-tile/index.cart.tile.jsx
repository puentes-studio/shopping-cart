import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart.slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-gray-200 mt-2 mb-2 rounded-xl w-full">
        <div className="flex p-3 ">
          <img
            className="h-28 rounded-lg"
            src={cartItem?.image}
            alt={cartItem?.title}
          />
          <div className="h-[100px] ml-10 self-start space-y-5">
            <h1 className="w-40 text-m text-gray-700 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
              {cartItem?.title}
            </h1>
            <p className="text-gray-700 font-extrabold">$ {cartItem?.price}</p>
            <button
              onClick={handleRemoveFromCart}
              className="text-gray-500 text-xs mt-1"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
