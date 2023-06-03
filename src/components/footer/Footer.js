import React from "react";
import "./footer.scss";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import paymentImg from "../../assets/payment.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h3>Follow us</h3>
          <ul className="social">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/handycraft_diy/"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/@anjuarts5935">
                <BsYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Company</h3>
          <ul className="company">
            <li>
              <a href=""> Contact Us</a>
            </li>
            <li>
              <a href=""> Privacy Policy</a>
            </li>
            <li>
              <a href=""> Returns and Exchange</a>
            </li>
            <li>
              <a href=""> Shipping Policy</a>
            </li>
            <li>
              <a href=""> Terms and Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="extra-footer">
        <img src={paymentImg} alt="" />
        <p>
          Copyright {new Date().getFullYear()} © <strong>craftypouch</strong>
        </p>
      </div>
    </>
  );
}
