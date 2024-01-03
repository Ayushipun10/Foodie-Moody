import RestaurantCard from "./restaurantcard";
import "./cards.css";

import restaurantslist from "../../utils/data/mockData";

const Body = () => {
  return (
    <>
      <div className="res-container">
        {restaurantslist.map((resDataItem) => (<RestaurantCard resData={resDataItem}/>))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      
      </div>
    </>
  );
};

export default Body;
