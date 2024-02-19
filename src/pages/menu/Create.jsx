import React, { useState } from "react";
import { API_URL } from "../../api/api";
import { useForm, useFieldArray } from "react-hook-form";
import { MenuForm } from "./MenuForm";
import { useQuery } from "@tanstack/react-query";
import { PageContainer } from "../../components/PageContainer";

export function CreateMenuItem() {
  const [saving, setSaving] = useState(false);

  const {
    isPending,
    error,
    data: ingredients,
  } = useQuery({
    queryKey: ["listIngredients"],
    queryFn: () => fetch(`${API_URL}/ingredients`).then((res) => res.json()),
  });

  const { control, register, handleSubmit } = useForm();
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

  if (isPending) {
    return (
      <PageContainer>
        <p>Loading...</p>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <p>Error: {error.message}</p>
      </PageContainer>
    );
  }

  return (
    <MenuForm
      title="Create new menu item"
      submitBtn="Create"
      disabled={saving}
      onSubmit={doSubmit}
      register={register}
      ingredients={ingredients}
      handleSubmit={handleSubmit}
      onAddIngredient={append}
      onRemoveIngredient={remove}
      ingredientsInput={fields}
    />
  );
}
