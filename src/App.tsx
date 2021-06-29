import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Components/Nav";
import CustomersAdd from "./Pages/CustomersAdd";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/first" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
        <Route path="/third/page" component={ThirdPage} />

        <Route path="/customers/add" component={CustomersAdd} />
        {/* <Route path="/settings/site/sharing" component={()=><h1>settings/site/sharing</h1>} /> */}
        {/* <Route path="/settings/shop/notifications" component={()=><h1>settings/shop/notifications</h1>} /> */}
        {/* <Route path="/orders/list" component={()=><h1>orders/list</h1>} /> */}

        <Redirect from="/" to="/first" exact />
        <Redirect from="/third" to="/third/page" />
      </Switch>
    </>
  );
};

export default App;
