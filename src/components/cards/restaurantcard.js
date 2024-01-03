import "./cards.css"

const RestaurantCard = () => {
    return(
        <>
        <div className="res-card">

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fobx7d0vvvycouedrbsb" className="res-img"/>
           
            <h4 className="details-styling">Dominos Pizza</h4>
            <div className="details-styling">4.4</div>
            <div className="details-styling">Pizzas, Italian, Pastas, Desserts</div>
            <div className="details-styling">Sector 50</div>
            
  
        </div>
        </>
    )
}

export default RestaurantCard