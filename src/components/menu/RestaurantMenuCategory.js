import "../../../src/index.css";
import { IoIosArrowDown } from "react-icons/io";
import MenuItemsList from "./MenuItemsList";
import { useState } from "react";

const RestaturantMenuCategory = ({ data,showMenuItems, setShowMenuCategoryIndex }) => {


    // const [showMenuItems, setShowMenuItems] = useState(true);

    const handleClick=()=>{
     
      setShowMenuCategoryIndex()
        // setShowMenuItems(!showMenuItems)
    }
  return (
    <div className="m-2">
      <div className="border-b-[10px] ">
        <div className="flex justify-between" onClick={handleClick}>
          <h1 className="font-bold m-2">
            {data.title} ({data?.itemCards?.length})
          </h1>
          <span className="m-3">
            <IoIosArrowDown />
          </span>
        </div>
        { showMenuItems && <MenuItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaturantMenuCategory;
