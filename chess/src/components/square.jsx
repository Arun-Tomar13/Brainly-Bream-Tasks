import React from "react";
import { useDispatch } from "react-redux";
import { toggleSquareColor } from "../chessSlice";

const Square = ({ color, row, col }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleSquareColor({ row, col }))}
      aria-label={`square-${row}-${col}`}
      className="w-full h-full flex items-center justify-center focus:outline-none transition-transform duration-150 ease-in-out transform hover:scale-[1.03] active:scale-[0.99]"
      style={{
        backgroundColor: color,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
     
      role="gridcell"
    />
  );
};

export default Square;
