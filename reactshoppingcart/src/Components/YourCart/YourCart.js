import React from "react";
import { Cart, CartDiv } from "./YourCart.styled";
import { FoodItemDescription } from "../FoodItem/FoodItem.styled";

const CartItem = ({ data }) => {
  return (
    <CartDiv>
      <FoodItemDescription>
        <h2 className="foodItemTitle">{data.name}</h2>
        <p className="foodItemDescription">{data.description}</p>
        <p className="foodItemPrice">${data.price}</p>
      </FoodItemDescription>
    </CartDiv>
  );
};

const YourCart = () => {
  const item = [
    {
      id: "f1",
      name: "momo",
      quantity: 2,
      price: 4.99,
    },
    {
      id: "f2",
      name: "chicken pizza",
      quantity: 4,
      price: 12.89,
    },
  ];

  return (
    <Cart>
      {item.map((elem) => (
        <CartItem key={elem.id} data={elem} />
      ))}
    </Cart>
  );
};

export default YourCart;
