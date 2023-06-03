import React from 'react'
import './product.scss'
import demoImg from '../../assets/product-img.jpg'
import { useNavigate } from 'react-router-dom'

export default function Product({data}) {
  const navigate = useNavigate()
  return (
    <div className='product' onClick={()=> navigate(`/products/${data?.key}`)}>
      <div className="product-img">
      {data?.image?.data?.attributes?.url ? <img src={data?.image?.data?.attributes?.url} alt="" /> : <img src={demoImg} alt="" /> }
        
      </div>
      <div className="product-details">
        <h3 className="title">{data?.title}</h3>
        <div className="price">₹ {data?.price}</div>
      </div>
    </div>
    // <div className='product' onClick={()=> navigate(`/products/123`)}>
    //   <div className="product-img">
    //     <img src={demoImg} alt="" />
    //   </div>
    //   <div className="product-details">
    //     <h3 className="title">title</h3>
    //     <div className="price">₹ 599</div>
    //   </div>
    // </div>
  )
}
