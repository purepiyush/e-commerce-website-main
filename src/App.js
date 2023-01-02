import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders/Orders";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { changeCatogery, setSearchTerm } from "./redux/basketSlice";

const promise = loadStripe(
  "pk_live_51MCOP4SFI5WWY4bcAhIMziRLLdey44zs9NH0mz1mFP8qYsTgV7p7dt5hCP36NbeM14dfcbP138bwvhRcq0Weq3hr00kdZUfesW"
);

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchTerm(''));
    dispatch(changeCatogery('all'));
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<><Header/><Orders/></>} />
          <Route path="/product/:id" element={<><Header/><SingleProduct/></>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/payment" element={
            <><Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements></>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
