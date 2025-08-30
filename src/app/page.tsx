"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-emerald-200 to-indigo-200
    dark:from-zinc-900 dark:to-emerald-300">
      <div className="text-center space-y-8">
        {/* Animated Shop Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Link href="/product">
            <div className="w-28 h-28 mx-auto flex items-center justify-center bg-white dark:bg-zinc-700 rounded-full shadow-lg cursor-pointer hover:scale-110 transition">
              <ShoppingBag className="w-12 h-12 text-emerald-600 bg" />
            </div>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          Welcome to <span className="text-emerald-800">TelaaJani</span>
        </motion.h1>
        <p className="text-white-600 text-lg">
          Discover modern fashion for every occasion
        </p>

        {/* Arrow Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/product">
            <button className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition animate-bounce">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
