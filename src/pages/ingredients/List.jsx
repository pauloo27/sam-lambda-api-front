import React, { useEffect } from "react";
import { API_URL } from "../../api/api";
import { ListIngredientsPresenter } from "./ListPresenter";

export function ListIngredients() {
  const [ingredients, setIngredients] = React.useState([]);
  const [saving, setSaving] = React.useState(false);

  const handleUpdate = ({ id, amount }) => {
    setSaving(true);
    fetch(`${API_URL}/ingredients/${id}`, {
      method: "PUT",
      body: JSON.stringify({ availableAmount: amount }),
    }).then(() => {
      setSaving(false);
    });
  };

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((response) => response.json())
      .then(setIngredients)
      .catch((error) => console.error(error));
  }, []);

  return (
    <ListIngredientsPresenter
      saving={saving}
      onUpdate={handleUpdate}
      ingredients={ingredients}
    />
  );
}
