import React from "react";
import "./SubTotal.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBasketTotal, getTotalQty } from "../../utils/BasketTotal";

const SubTotal = () => {
  const { basket, user } = useSelector(state=>state);
  
  let totalAmount = getBasketTotal(basket);
  let navigate = useNavigate();
  const handleCheckout = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="subtotal">
      <p>SubTotal ({getTotalQty(basket)} items) : <strong>&#8377; {totalAmount}</strong></p>
      <small className="subtotal-gift">
        <input type="checkbox" />
        This orders contain a gift
      </small>
      <button onClick={handleCheckout} className="hoverBtn">Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
