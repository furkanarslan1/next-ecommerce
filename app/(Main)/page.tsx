import ProductList from "@/components/ProductList";
import Hero from "./_components/Hero";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || "all";
  return (
    <div>
      <Hero />
      <ProductList category={category} params="home" />
    </div>
  );
}
