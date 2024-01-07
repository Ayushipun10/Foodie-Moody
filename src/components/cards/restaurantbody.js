import RestaurantCard from "./RestaurantCard";
import "./Cards.css";
import { useState } from "react";
import restaurantslist from "../../utils/data/mockData";



const Body = (props) => {
  const {selectedCategory} = props
 

  const filterCards = selectedCategory ? selectedCategory : restaurantslist

  // const filterCards = selectedCategory ? restaurantslist.filter((item)=> item.info.cuisines.includes(selectedCategory) || item.info.cuisines.includes(selectedCategory + "s")) : restaurantslist
  console.log("filtering", filterCards)

 
  return (
    <>
      <div className="res-container">
        {filterCards.map((resDataItem) => (<RestaurantCard key={resDataItem.info.id} resData={resDataItem}/>))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
    
      </div>
    </>
  );
};

export default Body;
