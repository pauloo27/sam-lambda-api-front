import React, { useEffect } from "react";
import { API_URL } from "../../api/api";
import { ListIngredientsPresenter } from "./ListPresenter";
import { useQuery } from "@tanstack/react-query";

export function ListIngredients() {
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

  const { isPending, error, data } = useQuery({
    queryKey: ["listIngredients"],
    queryFn: () => fetch(`${API_URL}/ingredients`).then((res) => res.json()),
  });

  return (
    <ListIngredientsPresenter
      pending={isPending}
      error={error}
      saving={saving}
      onUpdate={handleUpdate}
      ingredients={data ?? []}
    />
  );
}
