import { Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import "./collection.scss";
import { fetchAllProducts, fetchCategoriesProducts } from "../../redux/slices/categoryProductsSlice";

export default function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState([]);

  const categoriesData = useSelector((state) => state.categorySlice.categories);
  const dispatch = useDispatch();
  const categoriesProducts = useSelector(
    (state) => state.categoryProductsSlice.products
  );

  useEffect(() => {
    setCategories(categoriesData);
  }, [categoriesData]);

  const onChange = (e) => {
    navigate(`/category/${e.target.value}`);
  };
  useEffect(() => {
    if(params.categoryId !== undefined){
      dispatch(fetchCategoriesProducts(params.categoryId));
    }
    else{
      dispatch(fetchAllProducts())
    }
  }, [params.categoryId]);

  useEffect(() => {
    if (params.categoryId !== undefined) {
      setProducts(categoriesProducts);
    }
    else{
      setProducts(categoriesProducts)
    }
  }, [categoriesProducts, params.categoryId, dispatch]);

  return (
    <div className="categories">
      <div className="category-header">
        <div className="header">
          <h1>Explore all products.</h1>
          <p>100% handmade and high quality products.</p>
        </div>

        {/* filter and sort - can be done with strapi request url */}
        {/* <div className="sorter">
          <Select
            className="select-filter"
            defaultValue="relavance"
            style={{
              width: 160,
            }}
            options={[
              {
                value: "relavance",
                label: "Relavance",
              },
              {
                value: "newest",
                label: "Newest First",
              },
              {
                value: "lowtohigh",
                label: "Price - Low to High",
              },
            ]}
          />
        </div> */}
      </div>
      <div className="products-container">
        <div className="filter-menu">
          <h3>Categories</h3>
          <Radio.Group
            className="filter-product-page"
            onChange={onChange}
            value={params.categoryId}
          >
            {categories?.map((item, index) => {
              return (
                <Radio key={index} value={item.attributes.key}>
                  {item.attributes.title}
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <div className="products-list">
          {products.map((product, index) => (
            <Product key={index} data={product?.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}
