import Header from "../header/Header";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import "./menu.css";
import { CDN_URL } from "../../utils/constants";
import RestaturantMenuCategory from "./RestaurantMenuCategory";

const RestaturantMenu = () => {
  const { resId } = useParams();

  const [showMenuCategoryIndex, setShowMenuCategoryIndex] = useState(0);

  const restaurantMenuInfo = useRestaurantMenu(resId);

  if (restaurantMenuInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName } =
    restaurantMenuInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;

  const categories =
    restaurantMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
          {categories.map((categorymenu, index) => (
            <RestaturantMenuCategory
              data={categorymenu?.card?.card}
              key={categorymenu?.card?.card?.title}
              showMenuItems={index === showMenuCategoryIndex}
              setShowMenuCategoryIndex={() => {
                setShowMenuCategoryIndex(
                  (prevIndex) => (prevIndex === index ? null : index) // Toggle the state
                );
              }}
            />
          ))}
        </div>
        {/* <div className="menu-cards-recommended">
          <h3>
            {
              restaurantMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
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
        </div> */}
      </div>
    </>
  );
};

export default RestaturantMenu;
