import { CDN_URL } from "../../utils/constants";
import "./Cards.css";


const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, locality } =
    resData?.info;

  return (
    <>
      <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} className="res-img" />

        <h4 className="details-styling">{name}</h4>
        <h4 className="details-styling">⭐️{avgRating}</h4>
        <div className="details-styling font-sty cuisine-sty">
          {cuisines.join(", ")}
        </div>
        <div className="details-styling font-sty">{locality}</div>
      </div>
    </>
  );
};
export default RestaurantCard;
