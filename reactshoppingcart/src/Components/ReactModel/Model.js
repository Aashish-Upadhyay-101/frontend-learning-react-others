import React, { useContext } from "react";
import "./Model.css";
import ModelContent from "./ModelContent";
import CartContext from "../../store/cart-context";

const Model = (props) => {
  const cartCtx = useContext(CartContext); // context api

  const totalPrice = cartCtx.totalAmount.toFixed(2);

  const hasItem = cartCtx.items.length > 0;

  const notCancelHandler = (e) => {
    props.handleOverlay(false);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    props.handleOverlay(false);
  };

  const handleOrder = (e) => {
    console.log("order delivered");

    return e.stopPropagation();
  };

  // remove from cart
  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="model-background" onClick={cancelHandler}>
      <div className="model" onClick={(e) => e.stopPropagation()}>
        <div>
          {cartCtx.items.map((elem) => {
            return (
              <ModelContent
                key={elem.id}
                id={elem.id}
                data={elem}
                onRemove={cartRemoveHandler}
              />
            );
          })}
        </div>
        <div className="total">
          <p>Total: ${totalPrice}</p>
        </div>
      </div>
      <div className="btn-action">
        {hasItem && (
          <button className="btn fill" onClick={handleOrder}>
            Order
          </button>
        )}
        <button className="btn outline" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Model;
