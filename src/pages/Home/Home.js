import React from "react";
import "./Home.css";
import { headerItems, products } from "../../utils/ProductsData";
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import Slider from "../../components/Slider/Slider";
import Product from "../../components/Product/Product";
import BackToTop from "../../components/BackToTop/BackToTop";
import { useSelector } from "react-redux";

const Home = () => {
  let state = useSelector(state => state);
  let {searchTerm,category} = state;
  localStorage.setItem('amazon',JSON.stringify(state));
  let filterProducs = products.filter(item => {
    if(category==='all') return true;
    return item.category === category;
  })
  filterProducs = filterProducs.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <div>
      <div className="item-container">
        {headerItems.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
          {filterProducs.length===0 && <h2>No Product found</h2>}
          {filterProducs.slice(0,2).map((item) => (<Product key={item.id} item = {item} />))}
          </div>
          <div className="home-row">
            {filterProducs.slice(2,5).map((item) => (<Product key={item.id} item = {item} />))}
          </div>
          <div className="home-row">
            {filterProducs.slice(5, 6).map((item) => (<Product key={item.id} item = {item} />))}
          </div>
          <div style={{ marginTop: "40px" }}>
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
