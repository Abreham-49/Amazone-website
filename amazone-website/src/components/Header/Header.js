import React from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader"
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo Section */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search Section */}
          <div className={classes.search_container}>
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" placeholder="Search Amazone" />

            <BsSearch size={38} />
          </div>
          {/* left side link */}
          <div className={classes.order_container}>
            <Link to="" className={classes.image}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png
"
                alt=""
              />
              <select>
                <option>EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <div>
                <p>Hello,Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              {/* orders */}
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
