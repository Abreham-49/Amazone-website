import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { Datacontext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";

function ProductCard({ product,flex,renderDes}) {
  const [state, dispatch] = useContext(Datacontext);
  if (!product || !product.rating) return null;

  const { image, title, id, rating,description, price } = product;

  const addtocart=()=>{
   dispatch({
     type: Type.ADD_TO_BASKET,
     item: { image, title, id, rating, description, price },
   });
  }

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
        <button className={classes.button} onClick={addtocart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
