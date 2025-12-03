import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start md:justify-between bg-gray-800 text-white p-8 rounded-lg gap-6 md:gap-0">
      <div className="flex flex-col items-center gap-1 ">
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
        <p className="text-sm text-slate-300">
          &copy; 2025 Furkan Arslan. All rights reserved.
        </p>
      </div>
      <div>
        <h5 className="text-center border-b-2 border-white">Links</h5>
        <ul className="flex flex-col gap-2 items-center mt-4 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>{" "}
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="text-center border-b-2 border-white">Products</h5>
        <ul className="flex flex-col gap-2 items-center mt-4 text-sm">
          <li>
            <Link href="/">All Products</Link>
          </li>
          <li>
            <Link href="/">p1</Link>
          </li>{" "}
          <li>
            <Link href="/">p2</Link>
          </li>
          <li>
            <Link href="/">p3</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="text-center border-b-2 border-white">Menu</h5>
        <ul className="flex flex-col gap-2 items-center mt-4 text-sm">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>{" "}
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Best Seller</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
