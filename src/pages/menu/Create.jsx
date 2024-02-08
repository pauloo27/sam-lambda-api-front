import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styled from "styled-components";
import { MenuIngredientInput } from "../../components/MenuIngredientInput";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #1e293b;
  border-radius: 0.5rem;
  padding: 50px;
  width: min(100%, 400px);
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export function CreateMenuItem() {
  return (
    <PageContainer>
      <StyledForm>
        <h1>Create Menu Item</h1>
        <Input label="Name" placeholder="Ham Burger" />
        <Input label="Price" placeholder="1.99" type="number" />
        <h3>Select the ingredients</h3>
        <div>
          <MenuIngredientInput />
        </div>
        <Button type="button" color="secondary">
          Add ingredient
        </Button>
        <Button type="submit" color="primary">
          Create
        </Button>
      </StyledForm>
    </PageContainer>
  );
}
