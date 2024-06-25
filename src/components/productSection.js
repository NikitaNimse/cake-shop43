import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ heading, products, cardBgColor }) => {
  return (
    <section>
      <h2>{heading}</h2>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard
          
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            quantity= {product.quantity}
            price= {product.price}
            bgColor={cardBgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;