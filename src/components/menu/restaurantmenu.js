import Header from "../header/Header";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaturantMenu = () => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
    MENU_API+ resId 
    );

    const json = await data.json();

    setRestaurantMenuInfo(json.data);
  };

  

  console.log("menu data", restaurantMenuInfo);

  if (restaurantMenuInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName } =
    restaurantMenuInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[1]?.card?.card;

  return (
    <>
      <div>
        <Header />
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{areaName}</h2>
        <h3>
          {
            restaurantMenuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards?.[1]?.card?.card?.title
          }
        </h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{(item?.card?.info?.variantsV2.pricingModels?.[0].price/100) || (item?.card?.info?.price/100)}</li>
          ))}
        </ul>
        {/* item?.card?.info?.variantsV2.pricingModels[0].price */}
        {/* <ul>
                    <li>{itemCards[0].card?.info?.name}</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul> */}
      </div>
    </>
  );
};

export default RestaturantMenu;
