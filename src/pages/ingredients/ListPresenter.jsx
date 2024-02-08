import React from "react";
import { IngredientCard } from "../../components/IngredientCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export function ListIngredientsPresenter({ ingredients, saving, onUpdate }) {
  return (
    <PageContainer>
      <h1>Ingredients</h1>
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
