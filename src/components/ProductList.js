// src/ProductList.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/fake_api";

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src="product-image.jpg"
              alt="Product"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
