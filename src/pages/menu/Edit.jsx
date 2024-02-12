import React, { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import { useForm, useFieldArray } from "react-hook-form";
import { MenuForm } from "./MenuForm";
import { useParams } from "react-router-dom";

export function EditMenuItem() {
  const [ingredients, setIngredients] = useState([]);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((response) => response.json())
      .then(setIngredients)
      .catch((error) => console.error(error));
  }, []);

  const { control, register, handleSubmit: handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const doSubmit = (data) => {
    setSaving(true);
    const formattedData = {
      ...data,
      ingredients: data.ingredients.map((ingredient) => ({
        ingredientId: Number(ingredient.id),
        amount: Number(ingredient.amount),
      })),
    };
    fetch(`${API_URL}/menu/`, {
      method: "POST",
      body: JSON.stringify(formattedData),
    }).then(() => {
      setSaving(false);
      window.location.href = "/menu";
    });
  };

  return (
    <MenuForm
      title="Edit menu item"
      disabled={saving}
      onSubmit={doSubmit}
      register={register}
      handleSubmit={handleSubmit}
      onAddIngredient={append}
      onRemoveIngredient={remove}
      ingredientsInput={fields}
      ingredients={ingredients}
    />
  );
}
