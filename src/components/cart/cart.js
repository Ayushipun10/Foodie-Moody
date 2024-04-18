import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import "../../../src/index.css"
import MenuItemsList from "../menu/MenuItemsList";
import {clearCart} from "../../utils/slices/cartSlice"

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items); 

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart(CartItems))
  }
  return (
    <>
    
      <Header />
      <div className="flex flex-col items-center">
      <div className="font-bold text-2xl text-orange-500 ">Cart</div>
      <button className="bg-orange-500 text-white w-[10%] h-[50px] rounded-md text-center font-bold" onClick= {()=>handleClearCart(CartItems)}>Clear Cart</button>
      <MenuItemsList items={CartItems} />
      </div>
    </>
  );
};
export default CartPage;
