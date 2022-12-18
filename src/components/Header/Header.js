import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCatogery, logout, setSearchTerm } from "../../redux/basketSlice";
import { getTotalQty } from "../../utils/BasketTotal";

const Header = () => {
  const dispatch = useDispatch();
  const totalRef = useRef();
  let state = useSelector(state => (state));
  localStorage.setItem('amazon',JSON.stringify(state));
  const { user, basket } = state;
  
  let userName;
  if(user)
    userName = user.email.split('@');

  //for animation effect on total section
  useEffect(()=>{
    totalRef.current.classList.add('scale');
    let id = setTimeout(()=>{
      totalRef.current.classList.remove('scale');
    },300)

    return ()=> clearTimeout(id);
  },[basket])

  // if userLoggedIn already, logout him
  const handleAuth = () => {
    if (user) {
      dispatch(logout());
    }
  };
  return (
    <nav className="header">
      <div className="header_left">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <LocationOnOutlinedIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
      </div>
      <div className="search">
        <select onChange={(e)=>dispatch(changeCatogery(e.target.value))}>
          <option value='all'>All</option>
          <option value='electronics'>Electronics</option>
          <option value='fashion'>Fashion</option>
          <option value='jewellary'>Jewellary</option>
          <option value='furniture'>Furniture</option>
        </select>
        <input type="text" className="searchInput" onChange={(e)=>dispatch(setSearchTerm(e.target.value))}/>
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={`${user ? "/" : "/login"}`} className="header-link">
          <div onClick={handleAuth} className="header-option">
            <span className="header-option1">
              Hello, {user ? userName[0].toUpperCase() : "Guest"}{" "}
            </span>
            <span className="header-option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option1">Your</span>
            <span className="header-option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link animate" ref={totalRef}>
          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">
              {basket && getTotalQty(basket)}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
