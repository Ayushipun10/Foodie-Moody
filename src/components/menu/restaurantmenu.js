import Header from "../header/Header";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";

import "./menu.css";
import { CDN_URL } from "../../utils/constants";

const RestaturantMenu = () => {
  const { resId } = useParams();

  const restaurantMenuInfo = useRestaurantMenu(resId);

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
      </div>
      <div className="menu-container">
        <div className="restaurant-main-title">
          <h1 className="heading-menu">{name}</h1>
          <h4 className="menu-text">{cuisines.join(", ")}</h4>
          <h4 className="menu-text">{areaName}</h4>
        </div>
        <div className="menu-cards-recommended">
          <h3>
            {
              restaurantMenuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards?.[1]?.card?.card?.title
            }
          </h3>

          <ul>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id} className="menu-text-card">
                <div>
                  <div className="dish-recom-name">
                    {item?.card?.info?.name}
                  </div>
                  <div>
                    ₹
                    {item?.card?.info?.variantsV2.pricingModels?.[0].price /
                      100 || item?.card?.info?.price / 100}
                  </div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div>
                  <img
                    src={CDN_URL + item?.card?.info?.imageId}
                    className="menu-image"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
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
