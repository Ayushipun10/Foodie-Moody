import Header from "../header/Header";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/shimmer";

const RestaturantMenu = () => {

const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);

useEffect(() => {
    fetchMenuData();
  }, []);

const fetchMenuData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57142083264392&lng=77.3638055473566&restaurantId=647279&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();

    setRestaurantMenuInfo(json.data);


    
   
}

// const {name} = resInfo?.cards[0]?.card?.card?.info;


console.log("menu data", restaurantMenuInfo)

if(restaurantMenuInfo === null){
    return <Shimmer/>
}


const {name, cuisines, areaName } = restaurantMenuInfo?.cards[0]?.card?.card?.info;

const {itemCards} = restaurantMenuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card




    return (
        <>
            <div>
                <Header/>
                <h1>{name}</h1>
                <h2>{cuisines.join(", ")}</h2>
                <h2>{areaName}</h2>
                {/* <h2>{restaurantMenuInfo.cuisines.join(", ")}</h2>
                <h2>{restaurantMenuInfo.areaName}</h2> */}
                <ul>
                    <li>{itemCards[0].card.info?.name}</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>
            </div>
        </>
    )
}

export default RestaturantMenu