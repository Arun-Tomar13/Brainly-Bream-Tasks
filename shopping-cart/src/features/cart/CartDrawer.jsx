import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "./cartSlice";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer({ open, onClose }) {
  const { cartItems, totalPrice, totalQuantity } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* CART PANEL */}
          <motion.aside
            className="relative bg-white/90 backdrop-blur-xl w-full sm:w-[420px] h-full flex flex-col shadow-2xl border-l border-white/50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* HEADER */}
            <div className="p-5 border-b bg-linear-to-r from-[#dc2626] to-[#b91c1c] text-white flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Your Cart ({totalQuantity})
              </h2>
              <button onClick={onClose} className="text-white p-1 rounded-full">
                ✕
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-gray-500 h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-300 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L6 6m1 7l-2 5"
                    />
                  </svg>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                        IMG
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({ id: item.id, type: "dec" })
                            )
                          }
                          className="w-7 h-7 border rounded text-gray-700"
                        >
                          −
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({ id: item.id, type: "inc" })
                            )
                          }
                          className="w-7 h-7 border rounded text-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-xs text-[#dc2626] mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t bg-white/50 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Total</span>
                  <span className="font-semibold text-lg text-gray-800">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert("Proceeding to checkout...")}
                  className="w-full bg-linear-to-r from-[#dc2626] to-[#b91c1c] text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Checkout
                </motion.button>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full mt-3 text-gray-600 text-sm hover:underline"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
