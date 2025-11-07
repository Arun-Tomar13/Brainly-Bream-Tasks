import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-md p-5 flex flex-col hover:shadow-lg"
    >
      {/* image area */}
      <div className="h-40 w-full bg-linear-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        <img src={product.img} alt="img" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">Inclusive of taxes</div>
        </div>

        <button
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to cart`}
          className="inline-flex items-center gap-2 bg-linear-to-r from-[#dc2626] to-[#b91c1c] text-white px-4 py-2 rounded-lg shadow hover:shadow-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
          Add
        </button>
      </div>
    </motion.div>
  );
}
