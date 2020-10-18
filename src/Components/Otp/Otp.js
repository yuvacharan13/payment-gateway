import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";

const Otp = () => {
  const { register, handleSubmit } = useForm();

  const { otp, SetOtp } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = (data) => {
    SetOtp(data.Otp);
    history.push("/paymentstatus");
    console.log(otp);
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="shadow p-3 mb-5 bg-white col-md-5 mx-auto">
            <div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group align-items-center justify-content-center">
                    <input
                      className="form-control input-style"
                      name="Otp"
                      type="text"
                      ref={register}
                      placeholder="Enter Otp"
                      required
                    />
                    <input
                      value="Submit Otp"
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

export default Otp;
