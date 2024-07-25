import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.product_container}>
      {product.map((singleProduct) => (
        <ProductCard
          renderAdd={true}
          product={singleProduct}
          key={singleProduct.id}
        />
      ))}
    </section>
  );
};

export default Product;
