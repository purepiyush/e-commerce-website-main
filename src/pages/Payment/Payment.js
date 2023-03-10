import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
// import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../utils/BasketTotal";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../utils/firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "../../utils/axios";
import { emptyBasket } from "../../redux/basketSlice";
import StripeCheckout from "react-stripe-checkout";
import { doc, setDoc } from "firebase/firestore"; 
import axios from "axios";



const Payment = () => {
  const { basket, user } = useSelector(state => state);
  const totalPrice = getBasketTotal(basket);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);

  // const stripe = useStripe();
  // const elements = useElements();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setProcessing(true);
  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       db.collection("users")
  //         .doc(user && user.uid)
  //         .collection("orders")
  //         .doc(paymentIntent.id)
  //         .set({
  //           basket: basket,
  //           amount: paymentIntent.amount,
  //           created: paymentIntent.created,
  //         });
  //       setSucceeded(true);
  //       setError(null);
  //       setProcessing(false);
  //       dispatch(emptyBasket());
  //       navigate("/orders");
  //     });
  // };

  // const handleChange = (e) => {
  //   setDisabled(e.empty);
  //   setError(e.error ? e.error.message : "");
  // };

  const handleToken = async(token)=>{
    //  console.log(token);
    const cart = {name: 'All Products', totalPrice}
    const response = await axios.post('http://localhost:8080/checkout',{
        token,
        cart
    })
    console.log(response);
    let {status}=response.data;
    console.log(status);
    if(status==='success'){
      await setDoc(doc(db, "users",user && user.uid,"orders",token.id), {
        basket: basket,
        amount: totalPrice,
      });
        dispatch(emptyBasket())
        navigate("/");
    }
    else{
        alert('Something went wrong in checkout');
    }
 }

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
            <p>House no. 230 Near Botnical Garden</p>
            <p>Lucknow, India</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket &&
              basket.map((item) => (
                <CheckoutProduct item={item} />
              ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/* <form>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                  <h3>Order Total: {getBasketTotal(basket)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form> */}
            <StripeCheckout
              stripeKey='pk_test_51Hhu6bK4kL4WRmvGEUkTmdFw1lUtTAnadBSDb0eXGuA2JJGrntIBdm10llYu5RbPbLbaS1My74Rgdi0n5ePYIGB600p3V4GKmK'
              token={handleToken}
              billingAddress
              shippingAddress
              name='All Products'
              amount={totalPrice * 100}
            ></StripeCheckout> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
