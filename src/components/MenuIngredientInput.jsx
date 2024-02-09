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

export function MenuIngredientInput({ ingredients }) {
  return (
    <Container>
      <Select>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id}>{ingredient.name}</option>
        ))}
      </Select>
      <Input small label="Amount" type="number" placeholder="Eg: 1" />
      <Button type="button" color="danger">
        Remove
      </Button>
    </Container>
  );
}
