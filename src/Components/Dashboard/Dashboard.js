import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { items, SetItems, cart, SetCart } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (id, price) => {
    console.log(cart);
    const data = [...cart, { id: id, price: price }];

    SetCart(data);

    console.log(cart);
    history.push("/cart");
  };

  return (
    <div>
      {items !== [] ? (
        <div>
          <div className="container">
            <div className="row align-items-center">
              {items.map((data, key) => {
                return (
                  <div key={key} className="col-4">
                    <div className="shadow p-3 mb-5 bg-white">
                      <div className="card">
                        <div className="card-header">{data.name}</div>
                        <div
                          className="card-body"
                          style={{ width: "18rem", height: "30rem" }}
                        >
                          <img
                            src={data.image}
                            alt="image not loaded"
                            style={{ width: "18rem", height: "10rem" }}
                          />
                          <p>Description: {data.description}</p>
                          <p>category: {data.category}</p>
                          <p>Label: {data.label}</p>
                          <p>Price: ${data.price}</p>
                        </div>
                        <div className="card-footer">
                          <button
                            className="addtocart"
                            onClick={handleClick.bind(
                              this,
                              data.id,
                              data.price
                            )}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
