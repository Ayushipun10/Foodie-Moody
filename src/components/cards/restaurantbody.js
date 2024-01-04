import RestaurantCard from "./RestaurantCard";
import "./Cards.css";

import restaurantslist from "../../utils/data/mockData";

const Body = () => {
  return (
    <>
      <div className="res-container">
        {restaurantslist.map((resDataItem) => (<RestaurantCard key={resDataItem.info.id} resData={resDataItem}/>))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      
      </div>
    </>
  );
};

export default Body;
