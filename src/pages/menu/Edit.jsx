import React, { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import { useForm, useFieldArray } from "react-hook-form";
import { MenuForm } from "./MenuForm";
import { useQuery } from "@tanstack/react-query";
import { PageContainer } from "../../components/PageContainer";
import { useParams } from "react-router-dom";

export function EditMenuItem() {
  const [saving, setSaving] = useState(false);
  const { id } = useParams();

  const {
    isPending: isIngredientsPending,
    error: ingredientsError,
    data: ingredients,
  } = useQuery({
    queryKey: ["listIngredients"],
    queryFn: () => fetch(`${API_URL}/ingredients`).then((res) => res.json()),
  });

  const {
    isPending: isMenuItemPending,
    error: menuItemError,
    data: menuItem,
  } = useQuery({
    queryKey: ["getMenuItem", id],
    queryFn: () => fetch(`${API_URL}/menu/${id}`).then((res) => res.json()),
  });

  const isPending = isIngredientsPending || isMenuItemPending;
  const error = ingredientsError || menuItemError;

  const { reset, control, register, handleSubmit: handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  useEffect(() => {
    if (!menuItem) return;
    reset({
      ...menuItem,
      ingredients: menuItem.ingredients.map((i) => ({
        id: i.ingredientId,
        amount: String(i.amount),
      })),
    });
  }, [menuItem]);

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

  const doSubmit = (data) => {
    setSaving(true);
    const formattedData = {
      ...data,
      ingredients: data.ingredients.map((ingredient) => ({
        ingredientId: Number(ingredient.id),
        amount: Number(ingredient.amount),
      })),
    };
    fetch(`${API_URL}/menu/${id}`, {
      method: "PUT",
      body: JSON.stringify(formattedData),
    }).then(() => {
      setSaving(false);
      window.location.href = "/menu";
    });
  };

  return (
    <MenuForm
      title="Edit menu item"
      submitBtn="Save"
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
