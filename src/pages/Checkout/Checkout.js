import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";

const Checkout = () => {
  const { basket, user } = useSelector(state=>state);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon add"
        />

        <div>
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shopping Basket is Empty"
              : "Your Shopping Basket"}
          </h2>
          {basket && basket.map((item) => (
              <CheckoutProduct item = {item} key={item.id}/>
            ))}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
