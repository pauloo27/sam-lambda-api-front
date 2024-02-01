import React, { useEffect } from "react";
import { IngredientCard } from "../components/IngredientCard";
import styled from "styled-components";
import { API_URL } from "../api/api";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function ListIngredients() {
  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((response) => response.json())
      .then(setIngredients)
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Ingredients</h1>
      <Container>
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </Container>
    </>
  );
}
