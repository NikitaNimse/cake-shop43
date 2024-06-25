import React from 'react';
import "./ProductCard.css"

const ProductCard = ({ name, image, description, bgColor,quantity,price }) => {
  return (
    <div className="product-card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={name}  className='image'/>
      <h3>{name}</h3>
      <p>{description}</p>
      <p> quantity:{quantity}</p>
      <p className='price'> price: Rs {price}</p>
    </div>
  );
};

export default ProductCard;