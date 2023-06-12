import React from "react";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <>
      <select className="city-dropdown" value={value} onChange={onChange}>
        <option value="">All Cities</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
