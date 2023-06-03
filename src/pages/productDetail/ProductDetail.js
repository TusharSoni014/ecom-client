import React, { useEffect, useState } from "react";
import "./productDetail.scss";
import { ImPriceTag } from "react-icons/im";
import { Button, Carousel } from "antd";
import productImg from "../../assets/product-img.jpg";
import { Divider } from "antd";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductDetail() {
  const params = useParams();
  const productKey = params.productId;
  const [productData, setProductData] = useState(null);
  const [productFound, setProductFound] = useState(false);
  const dispatch = useDispatch();

  function handleAddToCart() {
    console.log(productData);
    dispatch(addToCart(productData));
  }

  async function fetchData() {
    const response = await axiosClient.get(
      `/products?filters[key][$eq]=${productKey}&populate=image`
    );
    if (response.data.data.length > 0) {
      setProductData(response.data.data[0].attributes);
      setProductFound(true);
    } else {
      setProductFound(false);
    }
  }

  useEffect(() => {
    setProductData(null);
    fetchData();
  }, [params]);

  //demo product
  if (!productData) return <>Loading...</>;

  return (
    <>
      <div className="product-detail">
        <div className="product-img">
          <Carousel autoplay className="product-images-crousel">
            <img src={productData?.image?.data?.attributes?.url} alt="" />
          </Carousel>
        </div>
        <div className="product-details">
          <h1 className="title">{productData?.title}</h1>
          <h3 className="price">
            <ImPriceTag className="price-tag" /> ₹ {productData?.price}
          </h3>
          <p>{productData?.desc}</p>
          <div className="addtocart">
            <Button
              shape="round"
              type="primary"
              className="btn add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
          <Divider />
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: productData?.description }}
          />
        </div>
      </div>
    </>
  );
}
