import React from "react";
import { CardContainer } from "./CardContainer";
import { Badge } from "./Badge";
import { formatCurrency } from "../core/format";

export function MenuItemViewer({ item }) {
  return (
    <CardContainer>
      <h4>{item.name}</h4>
      <Badge>{formatCurrency(item.price)}</Badge>
      <span>
        Ingredients: {item.ingredients.map((i) => i.ingredient.name).join(", ")}
      </span>
    </CardContainer>
  );
}
