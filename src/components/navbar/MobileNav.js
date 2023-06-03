import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./mobilenav.scss";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        />
        <div>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <div className={menuOpen ? "mobile-nav-menu navopen" : "mobile-nav-menu"}>
        <ul>
          <li>
            <Link to="/products?category=mobile-pouch">Mobile Pouch</Link>
          </li>
          <li>
            <Link to="/products?category=handbags">Handbags</Link>
          </li>
          <li>
            <Link to="/products?category=other">Other</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
