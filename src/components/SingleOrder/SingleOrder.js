import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
// import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  console.log(order.basket);
  return (
    <div className="order">
      <h2>Order</h2>
      {/* <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p> */}
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          item={item}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      
      <h3 className="order-total">Order Total: {order.amount}</h3>
     
    </div>
  );
};

export default Order;
