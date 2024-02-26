import RestaurantCard, { WithOfferLabel } from "./RestaurantCard";
import "./Cards.css";
import Shimmer from "../shimmer/shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import useRestaurantCardData from "../../utils/hooks/useRestaurantCardData";

const Body = (props) => {
  const { selectedCategory, inputSearchValue, listChanged } = props;

  const listofRestaurant = useRestaurantCardData();


  const RestaurantCardOffer = WithOfferLabel(RestaurantCard);

  const search = inputSearchValue
    ? listofRestaurant.filter((item) =>
        item.info.name.toLowerCase().includes(inputSearchValue.toLowerCase())
      )
    : listofRestaurant;

  // const filterCards = selectedCategory ? selectedCategory : restaurantslist;

  // const cuisineFilter = selectedCategory
  //   ? listofRestaurant.filter(
  //       (item) =>
  //         item.info.cuisines.includes(selectedCategory) ||
  //         item.info.cuisines.includes(selectedCategory + "s")
  //     )
  //   : listofRestaurant;

  const cuisineFilter = selectedCategory ? selectedCategory : listofRestaurant

  //  const filteredRestaurant =  search || cuisineFilter

  
  // if(listofRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks Like You're Offline!! Please Check Your Connection🤔</h1>;

  return (listChanged ?? []).length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="res-container">
        {listChanged.map((resDataItem) => (
          <Link
            to={"/restaurants/" + resDataItem.info.id}
            key={resDataItem.info.id}
            className="link-card-styling"
          >
            {resDataItem.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardOffer resData={resDataItem} />
            ) : (
              <RestaurantCard resData={resDataItem} />
            )}
            {/* <RestaurantCard resData={resDataItem} /> */}
          </Link>
        ))}
        {/* <RestaurantCard resData={restaurantslist[0]}/> */}
      </div>
    </>
  );
};

export default Body;
