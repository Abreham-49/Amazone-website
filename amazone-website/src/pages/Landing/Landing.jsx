import React from 'react'
import Layout from '../../components/Layout/Layout';
import Carousel from "../../components/Carousel/Carousel";
import CatagoryCard from "../../components/Catagory/CatagoryCard";
import Product from "../../components/Product/Product";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <CatagoryCard />
      <Product />
    </Layout>
  );
}

export default Landing