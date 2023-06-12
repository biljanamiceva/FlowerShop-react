import React from "react";
import data from "../../constants/data";
import MyCarousel from "./MyCarousel";

const App = () => {
  return (
    <div className="app__myCarousel">
      <MyCarousel cards={data.clients} />
    </div>
  );
};

export default App;
