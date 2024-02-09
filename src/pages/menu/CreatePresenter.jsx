import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
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

const IngredientsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

let id = 0;

export function CreatePresenter({
  onSubmit,
  onAddIngredient,
  onRemoveIngredient,
  ingredientsInput,
  ingredients,
  register,
  handleSubmit,
  disabled,
}) {
  return (
    <PageContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Menu Item</h1>
        <Input
          name="name"
          required
          label="Name"
          placeholder="Eg: Ham Burger"
          register={register}
        />
        <Input
          name="price"
          required
          label="Price"
          placeholder="Eg: 1.99"
          type="number"
          register={register}
        />
        <h3>Select the ingredients</h3>
        <Button
          type="button"
          color="secondary"
          onClick={() => onAddIngredient()}
        >
          Add ingredient
        </Button>
        <IngredientsContainer>
          {ingredientsInput.map((_, index) => (
            <MenuIngredientInput
              key={index}
              index={index}
              register={register}
              onRemove={() => onRemoveIngredient(index)}
              ingredients={ingredients}
            />
          ))}
        </IngredientsContainer>
        <Button disabled={disabled} type="submit" color="primary">
          Create
        </Button>
      </StyledForm>
    </PageContainer>
  );
}
