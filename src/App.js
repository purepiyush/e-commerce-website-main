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
import { changeCatogery, setSearchTerm } from "./redux/basketSlice";
import { useDispatch } from "react-redux";

const promise = loadStripe(
  "pk_test_51MCOcjSAGGrNEZHoe5w65N03Imivwk54HQo9K3RbeIHfhKy2ICHtzvnQTnwe2OeCYmuNkxsRhvSFfKIuA14xdTFF004Bv802Wc"
);

function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeCatogery("all"));
    dispatch(setSearchTerm(''));
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProduct />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
