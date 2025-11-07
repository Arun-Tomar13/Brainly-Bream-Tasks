import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CartDrawer from "../features/cart/CartDrawer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

export default function ShoppingPage() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((s) => s.cart);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-[Inter] text-gray-800 bg-linear-to-br from-[#fee2e2] via-[#ffffff] to-[#fecaca]">
      {/* HEADER */}
      <header className="backdrop-blur-lg bg-white/30 sticky top-0 z-20 border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#dc2626] tracking-tight drop-shadow-sm">
            Brainy<span className="text-gray-800">Beam Store</span>
          </h1>
          <p className="hidden md:block text-gray-700">
            Your smart shopping experience ✨
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-10"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 drop-shadow-sm">
          Recommended For You
        </h2>
        <ProductList onAdd={handleAdd} />
      </motion.main>

      {/* FLOATING CART BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-8 right-8 flex items-center justify-center bg-linear-to-r from-[#dc2626] to-[#b91c1c] text-white w-16 h-16 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
        aria-label="Open cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L6 6m1 7l-2 5m13-5a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>

        {totalQuantity > 0 && (
          <motion.span
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-white text-[#dc2626] font-semibold text-xs px-2 py-1 rounded-full shadow"
          >
            {totalQuantity}
          </motion.span>
        )}
      </motion.button>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
