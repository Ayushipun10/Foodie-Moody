import { categories } from "../../utils/categories/categories";
import './Filter.css'
import restaurantslist from "../../utils/data/mockData";
import { useState } from "react";

const Filter = (props) => {

  const {setSelectedCategory} = props;

  const filtercuisine = (category) => {
 
    // const filterCards = restaurantslist.filter((item)=> item.info.cuisines.includes(category) || item.info.cuisines.includes(category + "s")) 
   
    // setSelectedCategory(filterCards)
    setSelectedCategory(category);

   
  }


   return (
    <>
      <div className="filter"> 
        {categories.map((item) => (
          <img src={item.src} className="filter-img-styling" key={item.id} onClick={()=> filtercuisine(item.label)}></img>
        ))}
      </div>
    </>
  );
};

export default Filter;
