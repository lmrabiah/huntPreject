import React from "react";
// import thingsStore from "../../Stores/ThingsStore";
import thingsStore from "../stores/thingsStore";
// import ItemRandom from "./ItemRandom";

const RandomList = ({ itemList }) => {
  const randomList = itemList.map((random) => <h1>{random.name}</h1>);

  return (
    <div>
      <h2>{randomList}</h2>
    </div>
  );
};
export default RandomList;
