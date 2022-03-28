import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className="productsCard">
      <Link to={`/item/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
      </Link>
      <div>
        <h3>{item.name}</h3>
        <h4>$ {item.price}</h4>
      </div>
    </div>
  );
};

export default Item;
