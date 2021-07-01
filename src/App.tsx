import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Components/Nav";
import CustomersAdd from "./Pages/CustomersAdd";
import SettingsSiteSharing from "./Pages/SettingsSiteSharing";
import SettingsShopNotifications from './Pages/SettingsShopNotifications';
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import OrdersList from "./Pages/OrdersList";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/first" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
        <Route path="/third/page" component={ThirdPage} />

        <Route path="/customers/add" component={CustomersAdd} />
        <Route path="/settings/site/sharing" component={SettingsSiteSharing} />
        <Route path="/settings/shop/notifications" component={SettingsShopNotifications} />
        <Route path="/orders/list" component={OrdersList} />

        <Redirect from="/" to="/first" exact />
        <Redirect from="/third" to="/third/page" />
      </Switch>
    </>
  );
};

export default App;
