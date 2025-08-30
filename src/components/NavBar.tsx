"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggele from "./ThemeToggele";
import { IoClose, IoMenu } from "react-icons/io5";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  // count total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);



  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
  ];
  return (
    <header className="fixed w-full border-b bg-emerald-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href={"/"}
          className=" flex items-center justify-between text-xl font-bold text-emerald-600 dark:text-emerald-400"
        >
          <Image src={'/logo.png'} alt="logo" width={30} height={10}
          className=""/>
          Telaa Jani
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:emerald-blue-600 dark:hover:text-emerald-400 transition-colors "
            >
              {item.name}
            </Link>
          ))}
           <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <ThemeToggele />

          <Link
            href={"/login"}
            className="px-4 py-2 border rounded-md text-sm font-medium border-emerald-500 text-emerald-600 dark:text-emerald-400  dark:border-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-900"
          >
            Login
          </Link>
        </nav>
        {/* mobile screen */}

        <div className="md:hidden flex items-center gap-2">
           <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
                      <ThemeToggele />

          <button onClick={()=> setIsOpen(!isOpen)} 
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            {isOpen ?(
              <IoClose size={26} className="text-gray-700 dark:text-gray-300" />
           ):( <IoMenu size={26} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
       {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t dark:border-gray-800 shadow-lg">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}


            <Link
              href="/login"
              className="px-4 py-2 text-center border rounded-md text-md font-extrabold border-emerald-500 text-emerald-600 bg-emerald-300 dark:text-emerald-600 dark:border-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-900"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
