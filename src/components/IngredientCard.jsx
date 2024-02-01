import React from "react";
import styled from "styled-components";
import { API_URL } from "../api/api";

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

const Button = styled.button`
  background-color: #f3b95f;
  border: 1px solid #000;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

export function IngredientCard({ ingredient: { id, name, availableAmount } }) {
  const [amount, setAmount] = React.useState(availableAmount);
  const [saving, setSaving] = React.useState(false);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSave = () => {
    setSaving(true);
    fetch(`${API_URL}/ingredients/${id}`, {
      method: "PUT",
      body: JSON.stringify({ availableAmount: Number(amount) }),
    }).then(() => {
      setSaving(false);
    });
  };

  return (
    <Container>
      <h3>{name}</h3>
      <InputContainer>
        <p>Available amount:</p>
        <input type="number" value={amount} onChange={handleChange} />
        <Button onClick={handleSave} disabled={saving}>
          Update
        </Button>
      </InputContainer>
    </Container>
  );
}
