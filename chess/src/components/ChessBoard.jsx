import React from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const ChessBoard = () => {
  const board = useSelector((state) => state.chess.board);

  
  const boardSizeStyle = {
    width: "min(90vmin, 90vw)",
    height: "min(90vmin, 90vw)",
  };

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={boardSizeStyle}
      role="grid"
    >
      <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
        {board.map((row, i) =>
          row.map((color, j) => (
            <Square
              key={`${i}-${j}`}
              color={color}
              row={i}
              col={j}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ChessBoard;
