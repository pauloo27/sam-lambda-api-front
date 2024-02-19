import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { MenuIngredientInput } from "../../components/MenuIngredientInput";
import { PageContainer } from "../../components/PageContainer";
import { StyledForm } from "../../components/StyledForm";

const IngredientsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export function MenuForm({
  title,
  submitBtn,
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
        <h1>{title}</h1>
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
          step="0.01"
          min="0"
          max="1000"
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
          {submitBtn}
        </Button>
      </StyledForm>
    </PageContainer>
  );
}
