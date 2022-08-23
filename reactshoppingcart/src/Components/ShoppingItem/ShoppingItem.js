import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { ShopItem } from "./ShoppingItem.styled";
import data from "../../data/foods";
import YourCart from "../YourCart/YourCart";
import App from "../../App";

const ShoppingItem = () => {
  return (
    <>
      <ShopItem>
        {data.map((elem) => (
          <FoodItem key={elem.id} id={elem.id} data={elem} />
        ))}
      </ShopItem>
    </>
  );
};

export default ShoppingItem;
