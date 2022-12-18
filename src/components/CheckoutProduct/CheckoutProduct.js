import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
// import } from '@mui/material/OutlinedInput'
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { addToBasket, removeFromBasket } from "../../redux/basketSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CheckoutProduct = ({ item, hideButton }) => {
  let dispatch = useDispatch();
  return (
    <div className="checkout-product">
      <img src={item.image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{item.title}</p>
        <p className="checkout-product-price">
          <strong>&#8377;</strong>
          <strong>{item.price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(item.rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <span onClick={() => dispatch(addToBasket(item))} className="button-action">
          <i>
            <AddCircleOutlineIcon className="hoverItem"/>
          </i>
        </span>
        <span>
          Quantity {item.qty}
        </span>
        <span onClick={() => dispatch(removeFromBasket(item.id))} className="button-action hoverBtn">
          <i>
            <RemoveCircleOutlineIcon className="hoverItem"/>
          </i>
        </span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
