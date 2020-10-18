import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";

const PaymentStatus = () => {
  const { otp, SetOtp } = useContext(UserContext);

  const history = useHistory();

  const HandleReturn = () => {
    history.push("/dashboard");
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="shadow p-3 mb-5 bg-white col-md-5 mx-auto">
            <div>
              <div className="card-body">
                {otp == "123456" ? (
                  <div>
                    <h1>Payment Successful</h1>
                  </div>
                ) : (
                  <div>
                    <h1>Wrong Otp,Payment Failure</h1>
                  </div>
                )}
                <button
                  className="btn btn-primary btn-lg btn-block font-weight-bold"
                  onClick={HandleReturn}
                >
                  Return to dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentStatus;
