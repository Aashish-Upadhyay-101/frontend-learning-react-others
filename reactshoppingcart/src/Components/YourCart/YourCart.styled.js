import styled from "styled-components";

const Cart = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1.2rem 2.4rem;

  & .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  & .btn {
    padding: 0.8rem 1.2rem;
    font-weight: 600;
    font-size: 1.4rem;
  }

  & .close {
    color: #f24236;
    box-shadow: inset 0 0 2px #f24236;
  }

  & .order {
    background-color: #f24236;
    color: #fff;
  }
`;

const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;

export { Cart, CartDiv };
