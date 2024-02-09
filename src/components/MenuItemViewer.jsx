import React from "react";
import { CardContainer } from "./CardContainer";
import styled from "styled-components";

const Detail = styled.div`
  display: flex;
  gap: 5px;
`;

export function MenuItemViewer({ item }) {
  return (
    <CardContainer>
      <h4>{item.name}</h4>
      <Detail>
        <span>Price: ${item.price}</span>
        <span>
          Ingredients:{" "}
          {item.ingredients.map((i) => i.ingredient.name).join(", ")}
        </span>
      </Detail>
    </CardContainer>
  );
}
