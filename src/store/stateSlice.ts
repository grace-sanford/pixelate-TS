import { createSlice } from "@reduxjs/toolkit";
import { isStore } from "../store";

const NUM_COLUMNS = 20;

interface stateSlice {
  grid: Array<Array<String>>;
  selectedColor: String;
}

let initialState: stateSlice = {
  grid: [],
  selectedColor: "red",
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addRow: (state) => {
      const newRow = Array(NUM_COLUMNS).fill("");
      state.grid.push(newRow);
    },
    pickColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    colorize: (state, { payload }) => {
      state.grid[payload.row][payload.column] = state.selectedColor;
    },
  },
});
const selectStateSlice = (state: isStore) => {
  return state.stateValues;
};

export const { addRow, pickColor, colorize } = stateSlice.actions;
export default stateSlice.reducer;
