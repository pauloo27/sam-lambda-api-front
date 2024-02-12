import React from "react";
import { IngredientCard } from "../../components/IngredientCard";
import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function ListIngredientsPresenter({
  pending,
  error,
  ingredients,
  saving,
  onUpdate,
}) {
  return (
    <PageContainer>
      <h1>Ingredients</h1>
      {pending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Container>
        {ingredients.map((ingredient) => (
          <IngredientCard
            onUpdate={(amount) => {
              onUpdate({ id: ingredient.id, amount });
            }}
            disabled={saving}
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
      </Container>
    </PageContainer>
  );
}
