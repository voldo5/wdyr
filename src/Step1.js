import React, { useContext } from "react";
import WizardContext from "./WizardContext";

const Step1 = () => {
  console.log("Render: Step 1");

  const wizardContext = useContext(WizardContext);
  const {
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip
  } = wizardContext;

  return (
    <div className="step">
      <h2 className="step-title">Step 1</h2>

      <form className="form">
        <label>Street</label>
        <input
          value={street}
          onChange={event => setStreet(event.target.value)}
        />

        <label>City</label>
        <input value={city} onChange={event => setCity(event.target.value)} />

        <label>State</label>
        <input value={state} onChange={event => setState(event.target.value)} />

        <label>Zip</label>
        <input value={zip} onChange={event => setZip(event.target.value)} />
      </form>
    </div>
  );
};

export default Step1;
