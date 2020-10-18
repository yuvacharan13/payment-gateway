import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./Cart.css"
var sum = 0;

const Cart = () => {
  const history = useHistory();
  var { totalPrice } = useContext(UserContext);
  const { items, SetItems, cart, SetCart} = useContext(UserContext);
  

  const handleClick = () => {
    history.push("/dashboard");
  };

  const handleBuyButton = () => {
    history.push("/payment");
  };

  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>Sl</th>
            <th>Recipe Name</th>
            <th>Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {cart.map((data, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{items[data.id].name}</td>
                <td>${items[data.id].price}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>${totalPrice}</strong>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>

      <button className="cartButton" onClick={handleClick}>Add more recipes</button>
      <button className="cartButton buyButton" onClick={handleBuyButton}>Buy Now</button>
    </div>
  );
};

export default Cart;
