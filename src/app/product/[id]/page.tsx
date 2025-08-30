"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "sonner";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Params {
  id: string;
}

export default function ProductDetails({ params }: { params: Promise<Params> }) {
  const resolvedParams = React.use(params); // ✅ unwrap params
  const [product, setProduct] = React.useState<Product | null>(null);
  const { addToCart } = useCart();

  React.useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${resolvedParams.id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
    };
    fetchProduct();
  }, [resolvedParams.id]); 

  if (!product) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <section className="container h-screen mx-auto px-4 py-10">
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 gap-8 shadow-md bg-gray-50 dark:bg-zinc-900">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="flex items-center m-4 gap-2 text-gray-500 hover:text-gray-400 font-medium"
          >
            <IoIosArrowBack
              size={30}
              className="border-2 border-zinc-700 rounded-full bg-gray-300"
            />
          </Link>
          <div>
            <img
              src={product.image || "/placeholder.png"}
              alt={product.title}
              className="w-full h-[400px] object-contain rounded-xl shadow-md bg-gray-50 dark:bg-zinc-800"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 shadow-md bg-gray-50 dark:bg-zinc-900 rounded-md p-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <span className="text-gray-500 text-sm">{product.category}</span>
          <p className="text-lg text-primary font-semibold">${product.price}</p>
          <p className="text-gray-500">{product.description}</p>

          {/* Add to Cart */}
          <button
            onClick={() =>{
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              })
               toast.success(`${product.title} added to cart 🛒`)
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          {/* Go to Cart */}
          <Link
            href="/cart"
            className="block text-center w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </section>
  );
}
