import React from 'react'
import classes from "./catagory.module.css";
import { CatagoryInfos } from "./CatagoryFullinfos";

function CatagoryCard() {
  return (
    <div className={classes.catagory_container}>
      {CatagoryInfos.map((item) => (
      <div className={classes.catagories}>
        <a href="">
          <span>
            <h2>{item.title}</h2>
          </span>
          <img src={item.imgLink}alt="" />
          <p>shop now</p>
        </a>
      </div>))};
    </div>
  );
}

export default CatagoryCard