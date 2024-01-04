import { categories } from "../../utils/categories/categories";
import "./Filter.css";

const Filter = () => {
  return (
    <>
      <div className="filter"> 
        {categories.map((item) => (
          <img src={item.src} className="filter-img-styling" key={item.id}></img>
        ))}
      </div>
    </>
  );
};

export default Filter;
