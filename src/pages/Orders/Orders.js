import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {
  collection,
  docs,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import Order from "../../components/SingleOrder/SingleOrder";

const Orders = () => {
  const { user } = useSelector((state) => state);
  const [orders, setOrders] = useState([]);

  console.log(user.uid);

  useEffect(() => {
    let collectionRef = collection(db, "users", user && user.uid, "orders");
    onSnapshot(collectionRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setOrders(orders => [...orders,doc.data()])
      });
    });
  }, []);
  console.log(orders)

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders &&
          orders.map((order, index) => <Order order={order} key={index} />)}
      </div>
    </div>
  );
};

export default Orders;
