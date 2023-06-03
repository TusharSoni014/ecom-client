import React, { useEffect } from "react";
import "./payment.scss";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/slices/cartSlice";

export default function Payment() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.status == "success") {
      dispatch(emptyCart());
    }
  }, [params.status]);

  return (
    <div className="payment-container">
      {params.status == "success" ? (
        <>
          <img
            className="status-img"
            src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
            alt=""
          />
          <div className="message">Your order placed successfully!</div>
          <Button className="btn" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </>
      ) : (
        <>
          <img
            className="status-img"
            src="https://media1.giphy.com/media/pjFF8YLW996aXqFHAu/giphy.gif?cid=6c09b95274ad2241cbec226c8245b64e96e70a90a010ff8d&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s"
            alt=""
          />
          <div className="message">Some error occured, try again !</div>
          <Button className="btn" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </>
      )}
    </div>
  );
}
