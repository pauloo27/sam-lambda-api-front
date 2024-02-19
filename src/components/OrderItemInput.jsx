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

export function OrderItemInput({ register, menu, onRemove, index }) {
  return (
    <Container>
      <Select
        label="Item"
        name={`items.${index}.id`}
        register={register}
        required
      >
        {menu.map((ingredient) => (
          <option value={ingredient.id} key={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </Select>
      <Input
        name={`items.${index}.amount`}
        register={register}
        label="Amount"
        type="number"
        placeholder="Eg: 1"
        small
        required
      />
      <Button type="button" color="danger" onClick={onRemove}>
        <i className="bx bx-trash"></i>
      </Button>
    </Container>
  );
}
