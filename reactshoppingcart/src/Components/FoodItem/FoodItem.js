import React, { useRef, useState, useContext } from "react";
import {
  AddToCart,
  FoodItemDescription,
  FoodItemStyled,
} from "./FoodItem.styled";
import InputCart from "./InputCart";
import CartContext from "../../store/cart-context";

const FoodItem = ({ data }) => {
  const cartCtx = useContext(CartContext); // context api
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const addToCartHandler = (e) => {
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5 || enteredAmount === NaN) {
      setAmountIsValid(false);
    } else {
      setAmountIsValid(true);
      cartCtx.addItem({
        id: data.id,
        amount: enteredAmount,
        price: data.price,
        name: data.name,
      });
    }
  };

  return (
    <>
      <FoodItemStyled>
        <FoodItemDescription>
          <h2 className="foodItemTitle">{data.name}</h2>
          <p className="foodItemDescription">{data.description}</p>
          <p className="foodItemPrice">${data.price}</p>
        </FoodItemDescription>

        <AddToCart>
          <InputCart
            ref={amountInputRef}
            label="Amount:"
            type="text"
            input={{
              min: 1,
              max: 5,
              step: 1,
              type: "number",
              defaultValue: 1,
            }}
          />

          <button className="add-btn" onClick={addToCartHandler}>
            Add to cart
          </button>
          {!amountIsValid ? (
            <p style={{ fontWeight: "bolder", fontSize: "14px" }}>
              Please enter valid amount (1-5)
            </p>
          ) : (
            ""
          )}
        </AddToCart>
      </FoodItemStyled>
      <hr />
    </>
  );
};

export default FoodItem;
