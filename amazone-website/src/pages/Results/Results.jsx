import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endpoints";
import ProductCard from "../../components/Product/ProductCard";
import classes from "./Results.module.css"
function Results() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
     setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory/{categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {
            result?.map((products)=>{
              return <ProductCard key={products.id} product={products} />
            })
          }
        </div>
      </section>
    </Layout>
  );}

export default Results;
