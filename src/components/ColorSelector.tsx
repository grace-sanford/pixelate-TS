import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pickColor } from "../store/stateSlice";
import { RootState } from "../store";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
];

const ColorSelector = () => {
  const dispatch = useDispatch();
  const { selectedColor } = useSelector(
    (state: RootState) => state.stateValues
  );

  //
  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.currentTarget.value)
    dispatch(pickColor(e.currentTarget.value));
  }

  return (
    <label>
      <select onChange={handleColorChange} value={selectedColor}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ColorSelector;
