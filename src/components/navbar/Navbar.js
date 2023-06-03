import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Avatar, Badge, Button, Drawer } from "antd";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import CartItem from "../cartitem/CartItem";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Navbar() {
  const categoriesData = useSelector((state) => state.categorySlice.categories);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.cart);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  async function handleCheckOut() {
    const response = await axiosClient.post("/orders", {
      products: cartItems,
    });
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: response.data.strapiId,
    });
    console.log(response);
  }

  useEffect(() => {
    const totalItemsPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price;
    }, 0);
    setTotal(totalItemsPrice);
  }, [cartItems]);

  return (
    <div className="navbar">
      <div className="header-main">
        <Link to="/">
          <div className="box">
            <img src={logo} alt="" />
          </div>
        </Link>
        <Link to="/">
          <h1>CraftyPouch</h1>
        </Link>
      </div>
      <div className="header-extra">
        <div className="categories">
          <ul>
            {categoriesData?.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link to={`/category/${navItem.attributes.key}`}>
                    {navItem.attributes.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cart" onClick={showDrawer}>
          <Badge count={cartItems.length}>
            <Avatar
              draggable={true}
              gap={8}
              icon={<BsFillCartFill />}
              size="medium"
            />
          </Badge>
        </div>
        <Drawer
          className="cart-drawer"
          width="100%"
          height="80%"
          title={
            <>
              <h1>
                <BsFillCartCheckFill /> Cart Items
              </h1>
            </>
          }
          placement="bottom"
          onClose={onClose}
          open={open}
        >
          <div className="cart-items-container">
            {cartItems.length == 0
              ? "Add something in your cart."
              : cartItems.map((cartItem, index) => {
                  return <CartItem key={index} data={cartItem} />;
                })}
          </div>

          <div className="cart-footer">
            <div className="total-count">
              <h2>Total: ₹{total}</h2>
            </div>
            {total == 0 ? (
              ""
            ) : (
              <Button type="primary" onClick={handleCheckOut} className="btn">
                Check Out
              </Button>
            )}
          </div>
        </Drawer>
        <MobileNav />
      </div>
      <div className="share-sidebar"></div>
    </div>
  );
}
