import React from "react";
import { getApiUrl } from "../../api/api";
import { ListIngredientsPresenter } from "./ListPresenter";
import { useQuery } from "@tanstack/react-query";

export function ListIngredients() {
  const [saving, setSaving] = React.useState(false);
  const handleUpdate = ({ id, amount }) => {
    setSaving(true);
    fetch(`${getApiUrl()}/ingredients/${id}`, {
      method: "PUT",
      body: JSON.stringify({ availableAmount: amount }),
    }).then(() => {
      setSaving(false);
      window.location.reload();
    });
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["listIngredients"],
    queryFn: () =>
      fetch(`${getApiUrl()}/ingredients`).then((res) => res.json()),
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
