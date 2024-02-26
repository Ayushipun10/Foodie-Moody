import "./search.css";
import { useState } from "react";

const Search = (props) => {
  const { setSearchTextProps } = props;

  const [searchText, setSearchText] = useState("");

  const handleSearchValue = (e) => {
    setSearchText(e.target.value);
    setSearchTextProps(e.target.value);
  };
  return (
    <div className="search-box-styling">
      <input
        type="text"
        className="search-input-styling"
        value={searchText}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default Search;
