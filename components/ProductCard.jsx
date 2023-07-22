import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/ProductDetailsCarousel.jsx" 
    className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img className="w-full" src="/1.jpg" alt="product image " />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium ">Product name </h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">INR 10000.00</p>
          <p className="text-base font-medium line-through">INR 20000.00</p>
          <p className="ml-auto text-base font-medium text-green-500">50% off</p>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
