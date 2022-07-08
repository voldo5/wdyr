import React from "react";

const Header = () => (
  <header>
    <h1>
      <span role="img" aria-label="raised eyebrow">
        🤨
      </span>{" "}
      Why Did You Render?
    </h1>

    <p className="subtitle">
      Changing one input causes the other to re-render, why?
    </p>

    <p className="subtitle">Check the console for logs.</p>
  </header>
);

export default Header;
