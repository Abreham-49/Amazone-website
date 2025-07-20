import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css'
function ProductCard({ product }) {
    const {image,title,id,rating,price}=product;
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <snail>{rating.count}</snail>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div >
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard