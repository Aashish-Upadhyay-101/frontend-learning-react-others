import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const ModelContent = ({ data }) => {
  const cartCtx = useContext(CartContext);

  const removeBtnHandler = () => {
    cartCtx.removeItem(data.id);
  };

  return (
    <div className="model-container">
      <div className="model-content">
        <p className="foodItemTitle">
          {data.name} <p>({data.amount})</p>
        </p>
        <p className="foodItemPrice">${data.price}</p>
        <hr />
      </div>
      <button>-</button>
    </div>
  );
};

export default ModelContent;
