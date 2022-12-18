import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";

const Product = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${item.id}`} className="title">
          <p>{item.title}</p>
        </Link>
        <p className="price">
          <strong>&#8377;</strong>
          <strong>{item.price}</strong>
        </p>
        <div className="rating">
          {Array(item.rating).fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={item.image} alt="" />
      <button onClick={()=>dispatch(addToBasket(item))}>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
