import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const products: Product[] = await res.json();
  return (
    <section
      className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
   gap-6"
    >
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div
            key={product.id}
            className="rounded-xl overflow-hidden shadow-md bg-background hover:shadow-lg transition bg-gray-100 dark:bg-zinc-900"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 object-contain bg-gray-50 dark:bg-zinc-950 border-2 rounded-t-md"
            />
            <div className="p-4 space-y-2">
              <span className="text-sm text-gray-500">{product.title}</span>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <p className="text-primary font-bold">${product.price}</p>
              {/* Buy Button */}
              <a
                href={`/product/${product.id}`}
                className="mt-3 block w-full text-center bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Buy Now
              </a>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
