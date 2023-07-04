import React, { useRef, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Images
import signing from "./Navbar Svg/signing.svg";
import cart from "./Navbar Svg/cart.svg";
import search from "./Navbar Svg/search.svg";
import logo from "./Navbar Svg/logo.svg";

//Styles
import styles from "./Navbar.module.css";

//Functions
import { removeSpace } from "../../functions/searchInput";

//Components
import List from "./List";

const Navbar = ({ burger }) => {

  const cartNumber = useSelector(state => state.cartState.totalBooksNumber);

  const [smallSearchBox, setSmallSearchBox] = useState(false);

  const searchInputRef = useRef();
  const smallSearchInputRef = useRef();
  
  const navigate = useNavigate();

  const searchHandler = () => {

    const searchInputValue = searchInputRef.current.value;

    if (searchInputValue.length > 0) {
      navigate(`/search/${removeSpace(searchInputValue)}`);
      searchInputRef.current.value = "";
    }
  };

  const smallSearchBoxHandler = () => {
    setSmallSearchBox(!smallSearchBox);
    setTimeout(() => {
      smallSearchInputRef.current.focus();
    }, 1000)
  }

  const enterSmallSearchHandler = (event) => {

    const smallSearchInputValue = smallSearchInputRef.current.value;

      if (smallSearchInputValue.length > 0) {
        if (event.keyCode === 13) {
          navigate(`/search/${removeSpace(smallSearchInputValue)}`);
          smallSearchInputRef.current.value = "";
          setSmallSearchBox(false);
        }
      }
  }

  const enterHandler = (event) => {

    const searchInputValue = searchInputRef.current.value;

      if (searchInputValue.length > 0) {
        if (event.keyCode === 13) {
          navigate(`/search/${removeSpace(searchInputValue)}`);
          searchInputRef.current.value = "";
        }
      }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.topnav}>
        <div className={styles.hamburger} onClick={burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={styles.logo}
          onClick={() => navigate("/", { replace: true })}
        >
          <img src={logo} alt="logo" />
          <span>بوک شاپ سید</span>
        </div>
        <div
          className={`${styles.searchbox} ${
            smallSearchBox ? styles.show : styles.hidden
          }`}
        >
          <input
            type="text"
            placeholder="نام کتاب ، نویسنده و ..."
            ref={smallSearchInputRef}
            onKeyDown={enterSmallSearchHandler}
          />
        </div>
        <div className={styles.searchinput}>
          <input
            type="text"
            placeholder="نام کتاب ، نویسنده و ..."
            ref={searchInputRef}
            onKeyDown={enterHandler}
          />
          <div onClick={searchHandler}>
            <img src={search} alt="search" />
          </div>
        </div>
        <div className={styles.leftpart}>
          <div className={styles.searchSvg} onClick={smallSearchBoxHandler}>
            <img src={search} alt="search" />
          </div>
          <div className={styles.cart}>
            <Link to='/cart'>
              <img src={cart} alt="cart" />
              <span>{cartNumber}</span>
            </Link>
          </div>
          <div className={styles.signingSvg} onClick={() => navigate("/login")}>
            <img src={signing} alt="signing" />
          </div>
          <Link to='/login' className={styles.signing}>ورود | ثبت نام</Link>
        </div>
      </div>
      <div className={styles.list}>
        <List />
      </div>
    </nav>
  );
};

export default Navbar;
