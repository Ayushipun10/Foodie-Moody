import { CDN_URL } from "../../utils/constants";
import "./Cards.css";
import "../../../src/index.css";

const RestaurantCard = (props) => {
  const { resData } = props;



  const { cloudinaryImageId, name, avgRating, cuisines, locality } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <>
      <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} className="res-img" />

        <h4 className="details-styling">{name}</h4>
        <div className="rating-delivery details-styling">
          <h4>⭐️{avgRating}</h4>
          <h4 className="delivery">{deliveryTime} mins</h4>
        </div>

        <div className="details-styling font-sty cuisine-sty">
          {cuisines.join(", ")}
        </div>
        <div className="details-styling font-sty">{locality}</div>
      </div>
    </>
  );
};

export const WithOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="text-white text-xl absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/4 w-full font-extrabold py-1 z-10 overflow-hidden">
          {props.resData.info.aggregatedDiscountInfoV3.header +
            " " +
            (props.resData.info.aggregatedDiscountInfoV3.subHeader
              ? props.resData.info.aggregatedDiscountInfoV3.subHeader
              : "")}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
