import ProductList from "@/components/ProductList";
import React from "react";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || "all";
  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
}
