import { categories } from "../../utils/categories/categories";
import { useState } from "react";
import "./Filter.css";
import "../../../src/index.css";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import useRestaurantCardData from "../../utils/hooks/useRestaurantCardData";

const Filter = (props) => {
  // const {setSelectedCategory, listofRestaurant, setListofRestaurant} = props;
  const { setSelectedCategory, listChanged, setListChanged } = props;

  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(categories.length - 1, prevIndex + 1));
  };

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
      <div className="filter relative flex items-center ">
        <TfiArrowCircleLeft
          className="text-[4rem] font-bold left-0 text-orange-600 m-1"
          onClick={handlePrevious}
        />
        <div className="overflow-hidden flex space-x-4">
          {categories.map((item, idx) => (
            <img
              src={item.src}
              className="filter-img-styling"
              key={item.id}
              onClick={() => filtercuisine(item.label)}
              style={{
                transform: `translateX(-${index * (100 / categories.length)}%)`,
              }}
            ></img>
          ))}
        </div>
        <TfiArrowCircleRight
          className="text-[4rem] font-bold right-0 text-orange-600  m-1"
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Filter;
