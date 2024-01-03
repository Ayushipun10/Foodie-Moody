import { categories } from "../../utils/categories/categories";
import "./filter.css";

const Filter = () => {
  return (
    <>
      <div className="filter"> 
        {categories.map((item) => (
          <img src={item.src} className="filter-img-styling"></img>
        ))}
      </div>
    </>
  );
};

export default Filter;
