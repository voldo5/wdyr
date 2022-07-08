import React, { useContext } from "react";
import WizardContext from "./WizardContext";

const Step1 = () => {
  console.log("Render Step 2");

  const wizardContext = useContext(WizardContext);
  const {
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName
  } = wizardContext;

  return (
    <div className="step">
      <h2 className="step-title">Step 2</h2>

      <form className="form">
        <label>First</label>
        <input
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />

        <label>Middle</label>
        <input
          value={middleName}
          onChange={event => setMiddleName(event.target.value)}
        />

        <label>Last</label>
        <input
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Step1;
