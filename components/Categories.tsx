"use client";
import React from "react";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  { name: "All", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
  { name: "T-shirts", icon: <Shirt className="w-4 h-4" />, slug: "t-shirts" },
  { name: "Shoes", icon: <Footprints className="w-4 h-4" />, slug: "shoes" },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  { name: "Bags", icon: <Briefcase className="w-4 h-4" />, slug: "bags" },
  { name: "Dresses", icon: <Venus className="w-4 h-4" />, slug: "dresses" },
  { name: "Jackets", icon: <Shirt className="w-4 h-4" />, slug: "jackets" },
  { name: "Gloves", icon: <Hand className="w-4 h-4" />, slug: "gloves" },
];

export default function Categories() {
  const searchParams = useSearchParams();
  const selecetedCategory = searchParams.get("category");
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string | null) => {
    // URL'deki mevcut query'leri alma
    // Get existing queries in the URL
    const params = new URLSearchParams(searchParams);

    // category parametresini ayarlama
    // set the category parameter
    params.set("category", value || "all");

    // URL’i güncelleme
    // Update the URL
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="grid gird-cols-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ga-2 bg-gray-200 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          key={category.slug}
          onClick={() => handleChange(category.slug)}
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selecetedCategory ? "bg-white" : "bg-gray-200"
          }`}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
}
