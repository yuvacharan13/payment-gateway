import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/Payment/Payment";
import { UserContext } from "./UserContext.js";
import PaymentStatus from "./Components/PaymentStatus/PaymentStatus";
import Otp from "./Components/Otp/Otp";

function App() {
  const [cart, SetCart] = useState([]);
  const [items, SetItems] = useState([]);
  const [otp, SetOtp] = useState();
  if (cart == "") {
    var totalPrice = 0;
  } else {
    totalPrice = 0;
    cart.forEach((value) => {
      totalPrice = totalPrice += parseFloat(value.price);
    });
  }

  useEffect(() => {
    fetch("http://starlord.hackerearth.com/recipe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => SetItems(data), 0);
      });
  }, []);

  return (
    <div>
      <Switch>
        <UserContext.Provider
          value={{ items, SetItems, cart, SetCart, otp, SetOtp, totalPrice }}
        >
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/otp">
            <Otp />
          </Route>
          <Route path="/paymentstatus">
            <PaymentStatus />
          </Route>
          <Redirect from="/" to="/dashboard" />
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
