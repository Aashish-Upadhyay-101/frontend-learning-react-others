import styled from "styled-components";

const FoodItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  padding: 1.2rem 3.2rem;

  & .add-btn {
    border: none;
    color: #fff;
    padding: 1.4rem 2.8rem;
    background-color: #f24236;
    border-radius: 100px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;

    &: hover {
      background-color: #99130a;
    }
  }
`;

const FoodItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  & .foodItemTitle {
    font-size: 2.1rem;
  }

  & .foodItemDescription {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & .foodItemPrice {
    font-size: 1.6rem;
    margin-top: 1.2rem;
    font-weight: 700;
    color: #ae1409;
  }
`;

const AddToCart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
`;

export { FoodItemStyled, FoodItemDescription, AddToCart };
