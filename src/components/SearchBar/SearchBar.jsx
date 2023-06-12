import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
