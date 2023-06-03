import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.scss";

export default function Category({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="category"
      style={{
        backgroundImage: `url(${data?.image?.data?.attributes?.url})`,
      }}
      onClick={() => navigate(`/category/${data?.key}`)}
    >
      <div className="category-content">
        <h2>{data.title}</h2>
      </div>
    </div>
  );
}
