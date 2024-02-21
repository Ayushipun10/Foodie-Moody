import "../../../src/index.css";
import { IoIosArrowDown } from "react-icons/io";
import MenuItemsList from "./MenuItemsList";

const RestaturantMenuCategory = ({ data }) => {

  return (
    <div className="m-2">
      {/* Accordion header */}
      <div className="border-b-[16px] ">
        <div className="flex justify-between">
        <h1 className="font-bold m-2">
          {data.title} ({data?.itemCards?.length})
        </h1>
        <span className="m-3">
          <IoIosArrowDown />
        </span>
        </div>
        <MenuItemsList items={data?.itemCards} />
      </div>
      {/* Accordion body */}
    </div>
  );
};

export default RestaturantMenuCategory;
