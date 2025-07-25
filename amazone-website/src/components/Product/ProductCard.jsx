import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product,flex,renderDes}) {
  if (!product || !product.rating) return null;

  const { image, title, id, rating,description, price } = product;

  return (
    <div className={`${classes.card_container} ${flex? classes.product_fixed:""}`}>
      <Link to={`products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDes && <div style={{maxWidth:'768px'}}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <span>{rating?.count}</span>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
