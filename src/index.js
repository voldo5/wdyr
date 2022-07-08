import React from "react";
import ReactDOM from "react-dom";
import WizardProvider from "./WizardProvider";
import Header from "./Header";
import Wizard from "./Wizard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      <WizardProvider>
        <Wizard />
      </WizardProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
