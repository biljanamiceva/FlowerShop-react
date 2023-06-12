import React from "react";
import { images } from "../../constants";
const EmptyList = () => {
  return (
    <div className="empty-list">
      <img src={images.emptyState} alt="Empty List" />
      <p className="p__opensans">No matching items found.</p>
    </div>
  );
};

export default EmptyList;
