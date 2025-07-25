import React, { useState, useEffect} from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endpoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
function ProductDetail() {
  const { productid } = useParams();
  const [prodetail,setProdetail]=useState({});
  const [isLoading,setIsLoading]=useState(false)
   useEffect(() => {
    setIsLoading(true);
     axios
       .get(`${productUrl}/products/${productid}`)
       .then((res) => {
         setProdetail(res.data);
         setIsLoading(false);
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
        <ProductCard product={prodetail} flex={true} renderDes={true} />
      )}
    </Layout>
  );
}

export default ProductDetail