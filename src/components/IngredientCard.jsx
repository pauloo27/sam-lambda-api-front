import React from "react";
import styled from "styled-components";
import { API_URL } from "../api/api";
import { Button } from "./Button";

const Container = styled.div`
  background-color: #fde767;
  margin: 20px;
  padding: 10px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function IngredientCard({
  ingredient: { name, availableAmount },
  disabled,
  onUpdate,
}) {
  const [amount, setAmount] = React.useState(availableAmount);

  const handleChange = (event) => {
    setAmount(Number(event.target.value));
  };

  return (
    <Container>
      <h3>{name}</h3>
      <InputContainer>
        <p>Available amount:</p>
        <input type="number" value={amount} onChange={handleChange} />
        <Button
          onClick={() => onUpdate(amount)}
          disabled={disabled}
          type="secondary"
        >
          Update
        </Button>
      </InputContainer>
    </Container>
  );
}
