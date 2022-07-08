import React, { useState } from "react";
import PropTypes from "prop-types";
import WizardContext from "./WizardContext";

const PersonProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const context = {
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip
  };

  return (
    <WizardContext.Provider value={context}>{children}</WizardContext.Provider>
  );
};

PersonProvider.propTypes = {
  children: PropTypes.node
};

export default PersonProvider;
