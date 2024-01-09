import RestaurantCard from "./RestaurantCard";
import "./Cards.css";
import { useEffect, useState } from "react";
import restaurantslist from "../../utils/data/mockData";

const Body = (props) => {
  const { selectedCategory } = props;

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
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    
  };

  // const filterCards = selectedCategory ? selectedCategory : restaurantslist;

  const filterCards = selectedCategory ? listofRestaurant.filter((item)=> item.info.cuisines.includes(selectedCategory) || item.info.cuisines.includes(selectedCategory + "s")) : listofRestaurant

  if(listofRestaurant.length === 0){
    return <h1>Loading....</h1>
  }
  return (
    <>
      <div className="res-container">
        {filterCards.map((resDataItem) => (
          <RestaurantCard key={resDataItem.info.id} resData={resDataItem} />
        ))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      </div>
    </>
  );
};

export default Body;
