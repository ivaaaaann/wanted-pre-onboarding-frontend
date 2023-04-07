import React from "react";
import Providers from "./components/common/Providers";
import Router from "./Router";

function App() {
  return (
    <Providers>
      <Router />
      <div id="modal" />
    </Providers>
  );
}

export default App;
