import React, { useState } from "react";
import { Main } from "../CodingTest.js/Tenzies/Main";

const Tenzies = () => {
  const [state, setState] = useState(0);
  return (
    <div className="tenziesRoot">
      <Main />
    </div>
  );
};

export default Tenzies;
