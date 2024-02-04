import RestaurantCard from "./RestaurantCard";
import "./Cards.css";
import { useEffect, useState } from "react";
import restaurantslist from "../../utils/data/mockData";
import Shimmer from "../shimmer/shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import useRestaurantCard from "../../utils/hooks/useRestaurantCard";

const Body = (props) => {
  const { selectedCategory, inputSearchValue } = props;

  // const [listofRestaurant, setListofRestaurant] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57142083264392&lng=77.3638055473566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   console.log("cards sponsored data", json);

  //   setListofRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredList(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const listofRestaurant = useRestaurantCard();

  const search = inputSearchValue
    ? listofRestaurant.filter((item) =>
        item.info.name.toLowerCase().includes(inputSearchValue.toLowerCase())
      )
    : listofRestaurant;

  // const filterCards = selectedCategory ? selectedCategory : restaurantslist;

  const cuisineFilter = selectedCategory
    ? listofRestaurant.filter(
        (item) =>
          item.info.cuisines.includes(selectedCategory) ||
          item.info.cuisines.includes(selectedCategory + "s")
      )
    : listofRestaurant;

  //  const filteredRestaurant =  search || cuisineFilter
  // if(listofRestaurant.length === 0){
  //   return <Shimmer/>
  // }


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks Like You're Offline!! Please Check Your Connection🤔</h1>

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="res-container">
        {cuisineFilter.map((resDataItem) => (
          <Link to={"/restaurants/" + resDataItem.info.id} key={resDataItem.info.id} className="link-card-styling">
            <RestaurantCard resData={resDataItem} />
          </Link>
        ))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      </div>
    </>
  );
};

export default Body;
