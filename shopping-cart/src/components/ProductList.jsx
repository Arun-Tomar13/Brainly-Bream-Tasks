import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 55000, description: "Slim 14-inch, 16GB RAM", img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha" },
  { id: 2, name: "Headphones", price: 1500, description: "Wireless, noise-cancelling", img:"https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" },
  { id: 3, name: "Mechanical Keyboard", price: 4200, description: "Tactile switches, RGB", img:"https://images.pexels.com/photos/18311093/pexels-photo-18311093.jpeg?cs=srgb&dl=pexels-esmihel-18311093.jpg&fm=jpg" },
  { id: 4, name: "Smartwatch", price: 8999, description: "Health tracking + GPS", img:"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?cs=srgb&dl=pexels-tdcat-437037.jpg&fm=jpg" },
  { id: 5, name: "Backpack", price: 2499, description: "Water-resistant, 20L", img:"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?cs=srgb&dl=pexels-tdcat-437037.jpg&fm=jpg" },
  { id: 6, name: "Mouse", price: 1299, description: "Ergonomic, high DPI", img:"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?cs=srgb&dl=pexels-tdcat-437037.jpg&fm=jpg" },
];

export default function ProductList({ onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
