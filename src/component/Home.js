import { observer } from "mobx-react";
import { Link, Route } from "react-router-dom";
import authStore from "../stores/authStore";
import RandomBtn from "./buttons/RandomBtn";
import TresureBtn from "./buttons/TreasureBtn";

const Home = () => {
  return (
    <>
      <Link to={"/things/random"}>
        <RandomBtn />
      </Link>

      <div>
        {authStore.user ? (
          <div>
            <Link to={"/things/treasure"}>
              <TresureBtn />
            </Link>
            <h1>Hello, {authStore.user.username}</h1>
            <button onClick={authStore.signout}>sign out</button>
          </div>
        ) : (
          <div>
            <Link to={"/signup"}>
              <button>Sign up</button>
            </Link>
            <Link to={"/signin"}>
              <button>Sign in</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default observer(Home);
