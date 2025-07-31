import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css";
import { Type } from "../../Utility/Action.type";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
function Cart() {
  const [{ basket }, dispatch] = useContext(Datacontext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increament=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
const decreament=(id)=>{
  dispatch(
    {
      type:Type.REMOVE_FROM_BASKET,
      id
    }
  )
}
  return (
    <div>
      <Layout>
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <h1>Hello</h1>
            <h3>Your shoping basket</h3>
            <hr />
            {basket?.length === 0 ? (
              <p>opps ! No item in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={classes.cart_product}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDes={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={classes.btn_container}>
                      <button
                        className={classes.btn}
                        onClick={() => increament(item)}
                      >
                        <TiArrowSortedUp size={20} />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decreament(item.id)}
                      >
                        <TiArrowSortedDown size={20} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
          {basket.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length}items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contain a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>
            </div>
          )}
        </section>
      </Layout>
    </div>
  );
}

export default Cart;
