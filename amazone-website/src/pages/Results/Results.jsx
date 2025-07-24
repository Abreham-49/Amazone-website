import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endpoints";
import ProductCard from "../../components/Product/ProductCard";
import classes from "./Results.module.css"
import Loader from "../../components/Loader/Loader"
function Results() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
     setResult(res.data);
     setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Catagory/{categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {result?.map((products) => {
              return <ProductCard key={products.id} product={products} />;
            })}
          </div>
        </section>
      )}
    </Layout>
  );}

export default Results;
