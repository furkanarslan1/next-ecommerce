import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingBag } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 ">
      {/* LEFT */}
      <Link href="/" className="">
        <div className="relative w-96 h-18 md:w-36 md:h-16">
          <Image
            src="/e-commerce-brand.webp"
            alt="e-commerce-logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* CENTER */}
      <div className="flex-1 mx-4">
        <SearchBar />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-4 ">
          <Link href="/" className="w-4  text-orange-500">
            <Home />
          </Link>

          <Link href="/" className="w-4  text-orange-500">
            <ShoppingBag />
          </Link>
          <Link href="/" className="w-4  text-orange-500">
            <Bell />
          </Link>
          <ShoppingCartIcon />
        </div>

        <Link href="/login" className="text-slate-500 text-sm hidden md:block">
          Sign in
        </Link>
      </div>
    </nav>
  );
}
