import { Link, Route } from "react-router-dom";
import RandomBtn from "./buttons/RandomBtn";
import TresureBtn from "./buttons/TreasureBtn";

const Home = () => {
  return (
    <>
      <Link to={"/things/random"}>
        <RandomBtn />
      </Link>

      <Link to={"/things/treasure"}>
        <TresureBtn />
      </Link>
    </>
  );
};

export default Home;
