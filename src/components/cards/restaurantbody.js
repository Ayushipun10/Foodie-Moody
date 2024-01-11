import RestaurantCard from "./RestaurantCard";
import "./Cards.css";
import { useEffect, useState } from "react";
import restaurantslist from "../../utils/data/mockData";
import Shimmer from "../shimmer/shimmer";

const Body = (props) => {
  const { selectedCategory, inputSearchValue} = props;

  const [listofRestaurant, setListofRestaurant] = useState([]);
 


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57142083264392&lng=77.3638055473566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const search =  inputSearchValue ? listofRestaurant.filter((item) => item.info.name.toLowerCase().includes(inputSearchValue.toLowerCase())) : listofRestaurant
  
  // const filterCards = selectedCategory ? selectedCategory : restaurantslist;


  const cuisineFilter = selectedCategory
    ? listofRestaurant.filter(
        (item) =>
          item.info.cuisines.includes(selectedCategory) ||
          item.info.cuisines.includes(selectedCategory + "s")
      )
    : listofRestaurant;

  //  const filteredRestaurant =  search.length>0 && cuisineFilter.length>0 ? search && cuisineFilter :listofRestaurant

    
  
  // if(listofRestaurant.length === 0){
  //   return <Shimmer/>
  // }
  return listofRestaurant.length === 0 ? (<Shimmer />):(
    <>
      <div className="res-container">
        {cuisineFilter.map((resDataItem) => (
          <RestaurantCard key={resDataItem.info.id} resData={resDataItem} />
        ))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      </div>
    </>
  );
};

export default Body;
