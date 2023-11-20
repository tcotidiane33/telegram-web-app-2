import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Notify from "./Components/Cinetpay/Notify";
import Return from "./Components/Cinetpay/Return";
import Cancel from "./Components/Cinetpay/Cancel";
import Payment from "./Components/Cinetpay/PaymentButton";
import Category from "./Components/Category";
import Order from "./Components/Order";
import Cinetpay from "./Components/Cinetpay/Cinetpay";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
          <Route path="/category" component={Category} />
          <Route path="/cinetpay" component={Cinetpay} />
          <Route path="/notify" component={Notify} />
          <Route path="/payment" component={Payment} />
          <Route path="/return" component={Return} />
          <Route path="/cancel" component={Cancel} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
