import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { PageContainer } from "../../components/PageContainer";
import { OrderForm } from "./OrderForm";
import { getApiUrl } from "../../api/api";

export function CreateOrder() {
  const [saving, setSaving] = useState(false);

  const {
    isPending,
    error,
    data: menu,
  } = useQuery({
    queryKey: ["listMenu"],
    queryFn: () => fetch(`${getApiUrl()}/menu`).then((res) => res.json()),
  });

  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

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
      customerName: data["customer-name"],
      orderItems: data.items.map((item) => ({
        menuItemId: Number(item.id),
        amount: Number(item.amount),
      })),
    };
    fetch(`${getApiUrl()}/orders/`, {
      method: "POST",
      body: JSON.stringify(formattedData),
    }).then((res) => {
      if (res.status !== 201) {
        setSaving(false);
        // yeah right
        return alert("Error placing order");
      }
      setSaving(false);
      window.location.href = "/orders";
    });
  };

  return (
    <OrderForm
      title="Place Order"
      submitBtn="Create"
      disabled={saving}
      onSubmit={doSubmit}
      register={register}
      handleSubmit={handleSubmit}
      menu={menu}
      onAddItem={append}
      onRemoveItem={remove}
      itemsInput={fields}
    />
  );
}
