import React, { useState, useContext } from "react";
import Model from "../ReactModel/Model";
import {
  Navigation,
  NavigationLogo,
  NavigationItem,
  HeaderImage,
} from "./Header.styled";
import CartContext from "../../store/cart-context";

const Header = () => {
  const [overlay, setOverlay] = useState(false);

  const CartCtx = useContext(CartContext);

  const numOfCartItem = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // const numOfCartItem = CartCtx.items.length;
  console.log(CartCtx.totalAmount);

  const cartHandler = (e) => {
    e.preventDefault();
    setOverlay(true);
  };

  return (
    <>
      <Navigation>
        <NavigationLogo>Shop</NavigationLogo>
        <NavigationItem>
          <li onClickCapture={cartHandler}>
            <a className="navigation-link" href="http://localhost:3000">
              <ion-icon className="cart" name="cart-outline"></ion-icon>
              View cart
              <p className="cart-counter">{numOfCartItem}</p>
            </a>
          </li>
        </NavigationItem>
      </Navigation>
      <HeaderImage
        src="https://media.istockphoto.com/photos/shopping-cart-full-of-food-on-yellow-background-grocery-and-food-picture-id1316968335?b=1&k=20&m=1316968335&s=170667a&w=0&h=PkK1r12jvNs3CiCsQIBFcTa0SO1kG5ZdsK_7Rz4PxyQ="
        alt="shopping cart picture"
      ></HeaderImage>

      {overlay && <Model handleOverlay={setOverlay} />}
    </>
  );
};

export default Header;
