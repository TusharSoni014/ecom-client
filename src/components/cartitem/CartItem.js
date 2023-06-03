import React from "react";
import "./cartitem.scss";
import demoImg from "../../assets/product-img.jpg";
import { Button } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";

export default function CartItem({ data }) {
  const dispatch = useDispatch();
  function handleRemoveCartItem() {
    dispatch(removeFromCart(data.key));
  }

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div className="item-img">
          <img
            src={data?.image?.data?.attributes?.formats?.thumbnail?.url}
            alt=""
          />
        </div>
        <div className="item-details">
          <h3 className="title">{data?.title}</h3>
          <p className="price">₹ {data?.price}</p>
        </div>
      </div>
      <Button
        className="btn-icon"
        type="primary"
        danger
        onClick={handleRemoveCartItem}
      >
        {<RxCross2 />}
      </Button>
    </div>
  );
}
