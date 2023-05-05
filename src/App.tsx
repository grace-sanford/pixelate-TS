import React, { MouseEvent } from "react";
import { useDispatch } from "../node_modules/react-redux/es/exports";
import { addRow } from "./store/stateSlice";
import { AppDispatch } from "./store";

import Table from "./components/Table";
import ColorSelector from "./components/ColorSelector";


const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddRowClick = (e: MouseEvent<HTMLInputElement>) => {
    dispatch(addRow());
  };

  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button id="add-row" onClick={handleAddRowClick}>
          Add a row
        </button>
        <ColorSelector />
      </div>
      <Table />
    </div>
  );
};

export default App;
