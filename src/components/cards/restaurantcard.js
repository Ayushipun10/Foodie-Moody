import { CDN_URL } from "../../utils/constants";
import "./Cards.css";


const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, locality } =
    resData?.info;

  const {deliveryTime} = resData?.info?.sla

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
export default RestaurantCard;
