import React from "react";
import ChessBoard from "./components/ChessBoard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-300 via-green-200 to-pink-300">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-700 mb-2 drop-shadow-sm">
          Chess Board — Redux Color Toggle
        </h1>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Click on <span className="font-semibold">white</span> → turns <span className="text-yellow-600 font-semibold">yellow</span>, 
          and <span className="font-semibold">black</span> → turns <span className="text-red-600 font-semibold">red</span>.
        </p>

        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/40">
          <ChessBoard />
        </div>
      </div>
    </div>
  );
}
