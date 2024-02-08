import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { CardContainer } from "./CardContainer";
import { Input } from "./Input";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
    <CardContainer>
      <h3>{name}</h3>
      <InputContainer>
        <Input
          label="Amount"
          type="number"
          value={amount}
          onChange={handleChange}
        />
        <Button onClick={() => onUpdate(amount)} disabled={disabled}>
          Update
        </Button>
      </InputContainer>
    </CardContainer>
  );
}
