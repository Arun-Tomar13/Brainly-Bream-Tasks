import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(8)
    .fill(null)
    .map(() => Array(8).fill(null))
    .map((row, i) =>
      row.map((_, j) =>
        (i + j) % 2 === 0 ? "white" : "black"
      )
    ),
};

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    toggleSquareColor: (state, action) => {
      const { row, col } = action.payload;
      const currentColor = state.board[row][col];

      if (currentColor === "white") state.board[row][col] = "yellow";
      else if (currentColor === "black") state.board[row][col] = "red";
      else if (currentColor === "yellow") state.board[row][col] = "white";
      else if (currentColor === "red") state.board[row][col] = "black";
    },
  },
});

export const { toggleSquareColor } = chessSlice.actions;
export default chessSlice.reducer;
