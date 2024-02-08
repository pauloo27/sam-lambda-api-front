import { Button } from "./Button";
import { Input } from "./Input";
import styled from "styled-components";
import { Select } from "./Select";

const Container = styled.div`
  border: 1px solid #1e293b;
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: end;
`;

export function MenuIngredientInput() {
  return (
    <Container>
      <Select>
        <option>Ingredient 1</option>
        <option>Ingredient 2</option>
        <option>Ingredient 3</option>
      </Select>
      <Input label="Amount" type="number" placeholder="1" />
      <Button type="button" color="danger">
        Remove
      </Button>
    </Container>
  );
}
