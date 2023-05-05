import React, { MouseEvent } from "react";
import { useDispatch } from "../node_modules/react-redux/es/exports";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddRowClick = (e: MouseEvent<HTMLInputElement>) => {
    // dispatch(addRow());
  };

  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button id="add-row" onClick={handleAddRowClick}>
          Add a row
        </button>
        {/* <ColorSelector /> */}
      </div>
      {/* <Table /> */}
    </div>
  );
};

export default App;
