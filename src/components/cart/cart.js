import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import "../../../src/index.css"
import MenuItemsList from "../menu/MenuItemsList";
import {clearCart} from "../../utils/slices/cartSlice"
import { MdRemoveShoppingCart } from "react-icons/md";

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items); 

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <>
    
      <Header />
      <div className="flex flex-col items-center">
      <div className="font-bold text-2xl text-orange-600 m-1">Grab Your Hunger</div>
      {/* {CartItems.length > 0 && <div className="font-bold text-2xl text-orange-600 m-1">Grab Your Hunger</div>} */}
      <button className="flex items-center justify-center m-1 bg-orange-600 text-white w-[10%] h-[50px] rounded-md text-center font-bold" onClick= {handleClearCart}>Clear Cart <MdRemoveShoppingCart className="ml-1"/></button>
      <div className="m-2 border-2 border-transparent hover:border-orange-600"><MenuItemsList items={CartItems}/></div>
      {CartItems.length === 0 && <h1 className="font-bold text-2xl text-orange-600 m-1">Whoops! Nothing to satisfy your hunger pangs, foodies; add items to your cart.</h1>}
      </div>
    </>
  );
};
export default CartPage;
