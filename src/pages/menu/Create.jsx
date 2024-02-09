import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styled from "styled-components";
import { MenuIngredientInput } from "../../components/MenuIngredientInput";
import { API_URL } from "../../api/api";

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

export function CreateMenuItem() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((response) => response.json())
      .then(setIngredients)
      .catch((error) => console.error(error));
  }, []);

  const [data, setData] = useState({
    name: "",
    price: "",
    ingredients: [],
  });

  const handleAddIngredient = () => {
    setData((prev) => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        {
          ingredient: "",
          quantity: "",
        },
      ],
    }));
  };

  return (
    <PageContainer>
      <StyledForm>
        <h1>Create Menu Item</h1>
        <Input label="Name" placeholder="Eg: Ham Burger" />
        <Input label="Price" placeholder="Eg: 1.99" type="number" />
        <h3>Select the ingredients</h3>
        <Button type="button" color="secondary" onClick={handleAddIngredient}>
          Add ingredient
        </Button>
        <IngredientsContainer>
          {data.ingredients.map((ingredient, index) => (
            <MenuIngredientInput
              ingredients={ingredients}
              key={index}
              ingredient={ingredient}
            />
          ))}
        </IngredientsContainer>
        <Button type="submit" color="primary">
          Create
        </Button>
      </StyledForm>
    </PageContainer>
  );
}
