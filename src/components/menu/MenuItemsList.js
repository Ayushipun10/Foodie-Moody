import "../../../src/index.css";
import { CDN_URL } from "../../utils/constants";
const MenuItemsList = ({ items }) => {
  return (
    <div className="m-2">
      <ul>
        {items.map((menuitems) => (
          <li
            className="border-b-2 border-dotted flex justify-between #282c3f73 items-center leading-loose " 
            key={menuitems?.card?.info?.id}
          >
            <div className="w-[80%] p-2">
              <div className="font-bold ">{menuitems.card.info.name}</div>
              <div >
                ₹
                {menuitems?.card?.info?.variantsV2.pricingModels?.[0].price /
                  100 || menuitems?.card?.info?.price / 100}
              </div>
              <div className="text-sm text-[#282c3f73] leading-relaxed">{menuitems?.card?.info?.description}</div>
            </div>
            <div>
             
              <div className="absolute">
               <button className="border-black bg-green-100  ">Add +</button>
              </div>
              <img src={CDN_URL + menuitems?.card?.info?.imageId} className="w-[100px] h-[80px] rounded-md m-2 "/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuItemsList;
