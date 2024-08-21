import React from "react";
import list from "../../public/list.json";

const Freebook = () => {
  const FreeBooks = list.filter((book) => book.category === "free");
  return <>
  <div>
    <h2>Free Offered Courses</h2>
    
  </div>
  </>;
};

export default Freebook;
