import React from "react";
import { getApiUrl } from "../../api/api";
import { ListOrdersPresenter } from "./ListPresenter";
import { useQuery } from "@tanstack/react-query";

export function ListOrders() {
  const [saving, setSaving] = React.useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["listOrders"],
    queryFn: () => fetch(`${getApiUrl()}/orders`).then((res) => res.json()),
  });

  const handleComplete = (id) => {
    setSaving(true);
    fetch(`${getApiUrl()}/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: "COMPLETED" }),
    }).then(() => {
      setSaving(false);
      window.location.reload();
    });
  };

  return (
    <ListOrdersPresenter
      pending={isPending}
      error={error}
      orders={data ?? []}
      onComplete={handleComplete}
      disabled={saving}
    />
  );
}
