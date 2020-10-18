import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Payment.css";

const Payment = () => {
  const { register, handleSubmit } = useForm();
  

  var { totalPrice } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = () => {
    history.push("/otp");
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-5 mx-auto">
          <h1 className="heading">Card details</h1>
            <p className="para">Total Cost: ${totalPrice}</p>
          </div>
          <div className="shadow p-3 mb-5 bg-white col-md-5 mx-auto">
            <div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group align-items-center justify-content-center">
                    <input
                      className="form-control input-style"
                      name="cardNumber"
                      type="text"
                      ref={register}
                      placeholder="Enter card number"
                      required
                    />
                    <input
                      className="form-control input-style"
                      name="expiryDate"
                      type="text"
                      ref={register}
                      placeholder="Enter expiry date"
                      required
                    />
                    <input
                      className="form-control input-style"
                      name="CVV"
                      type="text"
                      ref={register}
                      placeholder="Enter CVV"
                      required
                    />
                    <input
                      className="form-control input-style"
                      name="name"
                      type="text"
                      ref={register}
                      placeholder="Enter card holder name"
                      required
                    />
                    <input
                      value="Pay Now"
                      className="btn btn-primary btn-lg btn-block font-weight-bold"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
