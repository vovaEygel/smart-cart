import React, {Component} from "react";
import ProductPreview from "./ProductPreview";

function ProductList({products}) {
  return (
    <section className="product-list"> 
      {/* <div > */}
        {products.map(product => (
          <ProductPreview key={product._id} product={product}></ProductPreview>
        ))}
        {/* </div> */}
    </section>
  );
}
export default ProductList;
