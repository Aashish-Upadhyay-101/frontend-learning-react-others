import styled from "styled-components";

const Navigation = styled.div`
  padding: 1.2rem 5.6rem;
  margin: 0 auto;
  height: 9.6rem;
  background-color: #ffd52b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NavigationLogo = styled.h1`
  font-size: 4.6rem;
  color: #fff;
`;

const NavigationItem = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
  font-size: 1.8rem;
  font-weight: 700;

  & .navigation-link {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    padding: 1.4rem 2.8rem;
    background-color: #f24236;
    border-radius: 100px;
    transition: all 0.2s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    cursor: pointer;

    &: hover {
      background-color: #99130a;
    }
  }

  & .cart-counter {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    border: 3px solid #f66e65;
    border-radius: 100px;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  clip-path: polygon(0 0, 0 45%, 100% 10rem, 100% 0);
  margin-bottom: 14.8rem;
`;

export { Navigation, NavigationLogo, NavigationItem, HeaderImage };
