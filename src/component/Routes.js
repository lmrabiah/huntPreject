import { Route, Switch } from "react-router";
import thingsStore from "../stores/thingsStore";
import Home from "./Home";
import { observer } from "mobx-react";
//
import RandomList from "./RandomList";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/things/random">
          <RandomList itemList={thingsStore.randomThings} />
        </Route>

        <Route path="/things/treasure">
          {/* <TresureList /> */}
          <RandomList itemList={thingsStore.treasureThings} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default observer(Routes);
