"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // ✅ correct import
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();
  const router = useRouter(); // ✅ call useRouter

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlerCheckOut = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty❌");
      return;
    }
    toast.success("Thanks for shopping 🛒");
    clearCart();
    setTimeout(() => {
      router.push("/product"); // ✅ redirect
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
        <button
          onClick={() => router.push("/product")}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg shadow bg-gray-100 dark:bg-zinc-900"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded-md bg-white"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-lg"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded-lg"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 text-right">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button
          onClick={handlerCheckOut}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </section>
  );
}
