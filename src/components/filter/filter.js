import { categories } from "../../utils/categories/categories";
import "./Filter.css";

import useRestaurantCardData from "../../utils/hooks/useRestaurantCardData";

const Filter = (props) => {
  // const {setSelectedCategory, listofRestaurant, setListofRestaurant} = props;
  const { setSelectedCategory, listChanged, setListChanged } = props;
  const listofRestaurant = useRestaurantCardData();
  const filtercuisine = (category) => {
    const filterCards = listofRestaurant.filter(
      (item) =>
        item.info.cuisines.includes(category) ||
        item.info.cuisines.includes(category + "s")
    );

    setListChanged(filterCards);
    // setSelectedCategory(filterCards);
    // setSelectedCategory(category);
  };

  return (
    <>
      <div className="filter">
        {categories.map((item) => (
          <img
            src={item.src}
            className="filter-img-styling"
            key={item.id}
            onClick={() => filtercuisine(item.label)}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Filter;
