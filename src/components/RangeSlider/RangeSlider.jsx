import React from "react";

const RangeSlider = ({ max, step, value, onChange }) => {
  return (
    <>
      <span className="price-input-label">Max Price:</span>
      <input
        type="range"
        className="price-slider"
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div className="price-display">{value}</div>
    </>
  );
};

export default RangeSlider;
