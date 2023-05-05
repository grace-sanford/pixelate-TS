import React from "react";
import reactDom from "react-dom";
import App from "./src/App";

const root = reactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <Router>
  //   <Provider store={store}>
  <App />
  //   </Provider>
  // </Router>
);

// type App = {
//     ReactComponent
// }
// reactDom.render(<App />, document.getElementById("root"));
