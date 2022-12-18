import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../utils/firebase";
import SingleOrder from "../../components/SingleOrder/SingleOrder";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector((state) => state.data);
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {/* {orders &&
          orders.map((order, index) => <SingleOrder order={order} key={index} />)} */}
        Your Orders is empty currently
      </div>
    </div>
  );
};

export default Orders;
