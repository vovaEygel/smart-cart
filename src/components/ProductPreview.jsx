import React, {Component} from "react";

function ProductList({product}) {
  return (
    <div className="product-preview">
      <p>{product.productName}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductList;
