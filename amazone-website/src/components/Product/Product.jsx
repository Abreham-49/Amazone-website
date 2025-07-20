import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from "./product.module.css";
function Product() {
    const [products,setproducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setproducts(res.data);
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
        });
    }, []);
  return (
  <section className={classes.product_container}>
    {
        products.map((singleproduct) => {
           return <ProductCard key={singleproduct.id} product={singleproduct} />
})
    }
  </section>
  )
}

export default Product