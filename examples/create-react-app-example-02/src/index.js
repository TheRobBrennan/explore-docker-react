import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store/store";
import { ChildComponent } from "./components/child-component/childComponent";

function App() {
  return (
    <StoreProvider>
      <ChildComponent/>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);