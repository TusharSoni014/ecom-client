import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import "./home.scss";
import { useSelector } from "react-redux";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [topProducts, setTopProducts] = useState(null);

  const categoriesData = useSelector((state) => state.categorySlice.categories);
  const topPicks = useSelector((state) => state.topPicksSlice.topPicks);

  useEffect(() => {
    setCategories(categoriesData);
    setTopProducts(topPicks)
  }, [categoriesData, topPicks]);
  

  return (
    <div className="home">
      <Hero />
      <section className="collection">
        <div className="info">
          <h1 className="heading">Shop by Categories</h1>
          <p className="subheading">Buy with categories from our store.</p>
        </div>
        <div className="content">
          {categories &&
            categories.map((item, index) => {
              return <Category key={index} data={item.attributes} />;
            })}
        </div>
      </section>

      <section className="top-pics">
        <div className="info">
          <h1 className="heading">Our Top Picks</h1>
          <p className="subheading">
            Buy the most popular items from our store.
          </p>
        </div>
        <div className="content">
          {topProducts &&
            topProducts.map((item, index) => {
              return <Product key={index} data={item.attributes} />;
            })}
        </div>
      </section>
    </div>
  );
}
