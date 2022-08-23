import styled from "styled-components";

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  & input {
    padding: 0.8rem 1.2rem;
    border-radius: 100px;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    color: #f24236;
    font-weight: 700;
    font-size: 1.6rem;
    outline: none;
  }

  & label {
    font-size: 1.4rem;
    color: #555;
    font-weight: 600;
  }
`;

export default Input;
