import { ProductType } from "@/types/productsType";
import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

const products: ProductType[] = [
  {
    id: 1,
    name: "Adidas ",
    shortDescription: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde soluta modi debitis. Tempora nesciunt libero nobis sint omnis maxime laboriosam id, possimus architecto nihil cumque dicta qui! Quo, illum.",
    price: 49.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gre.png",
    },
  },
  {
    id: 2,
    name: "Puma ",
    shortDescription: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde soluta modi debitis. Tempora nesciunt libero nobis sint omnis maxime laboriosam id, possimus architecto nihil cumque dicta qui! Quo, illum.",
    price: 459.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gre.png",
    },
  },
  {
    id: 3,
    name: "Nike ",
    shortDescription: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde soluta modi debitis. Tempora nesciunt libero nobis sint omnis maxime laboriosam id, possimus architecto nihil cumque dicta qui! Quo, illum.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",

      green: "products/3gre.png",
    },
  },
  {
    id: 4,
    name: "Adidas ",
    shortDescription: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde soluta modi debitis. Tempora nesciunt libero nobis sint omnis maxime laboriosam id, possimus architecto nihil cumque dicta qui! Quo, illum.",
    price: 49.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gre.png",
    },
  },
  {
    id: 5,
    name: "Adidas ",
    shortDescription: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde soluta modi debitis. Tempora nesciunt libero nobis sint omnis maxime laboriosam id, possimus architecto nihil cumque dicta qui! Quo, illum.",
    price: 49.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gre.png",
    },
  },
];

export default function ProductList({
  category,
  params,
}: {
  category: string;
  params: "home" | "products";
}) {
  return (
    <div>
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
}
