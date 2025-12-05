"use client";
import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types/productsType";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ProductCard({ product }: { product: ProductType }) {
  const [ProductTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: ProductTypes.size,
      selectedColor: ProductTypes.color,
    });
    toast.success("Product added to cart");
  };

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[ProductTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4 text-xs">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center justify-between">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 ">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  className={`cursor-pointer p-1 border rounded-full ${
                    ProductTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } cursor-pointer`}
                  style={{
                    border:
                      ProductTypes.color === color
                        ? "2px solid black"
                        : "1px solid #ddd",
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART BUTTON */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="border border-gray-200 shadow-lg rounded-md px-2 py-1 text-xs  cursor-pointer hover:text-white hover:bg-black transition-all duraton-300 flex items-center gap-2 "
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
