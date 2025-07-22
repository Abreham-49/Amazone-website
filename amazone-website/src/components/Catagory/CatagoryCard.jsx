import React from 'react'
import classes from "./catagory.module.css";
import { CatagoryInfos } from "./CatagoryFullinfos";
import { Link } from 'react-router-dom';
function CatagoryCard() {
  return (
    <div className={classes.catagory_container}>
      {CatagoryInfos.map((item) => (
      <div className={classes.catagories}>
        <Link to={`/catagory/${item.name}`}>
          <span>
            <h2>{item.title}</h2>
          </span>
          <img src={item.imgLink}alt="" />
          <p>shop now</p>
        </Link>
      </div>))}
    </div>
  );
}

export default CatagoryCard