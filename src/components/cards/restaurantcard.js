import "./cards.css"

const RestaurantCard = (props)=> {
    const {resData} = props;

    const {name, avgRating, cuisines, locality} = resData?.info

    return(
        <>
        <div className="res-card">

            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} className="res-img"/>
           
            <h4 className="details-styling">{name}</h4>
            <h4 className="details-styling">{avgRating}</h4>
            <div className="details-styling font-sty cuisine-sty">{cuisines.join(", ")}</div>
            <div className="details-styling font-sty">{locality}</div>
            
  
        </div>
        </>
    )
}

export default RestaurantCard