import React, { useState } from "react";

// Question will this updates the UI when state chnages?
//  Ans :-Yes, thingsDisaply is a variable which is using the state.
export const stateUpdate = () => {
  const [thingsArray, setThingsArray] = useState(["Things 1", "Things 2"]);

  function addElement() {
    setThingsArray((prev) => [...prev, `Things ${prev.length + 1}`]);
  }

  const thingsDisplay = thingsArray.map((e) => <p>{e}</p>);
  return (
    <div>
      <button onClick={addElement}>Add Element</button>
      {thingsDisplay}
    </div>
  );
};
