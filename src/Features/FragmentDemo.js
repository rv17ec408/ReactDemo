import React from "react";

export const FragmentDemo = () => {
  /*
  React.Fragments are used to group multiple elements together without adding any extra element into the DOM.
  It is used when <div> is can't used as Parent element.
  This is also used to add key for element returned from the map. Check below
  */
  return (
    <>
      {[1, 2].map((val, index) => (
        <React.Fragment key={index}>
          <h1>Element {val}</h1>
          <h2>Data</h2>
        </React.Fragment>
      ))}
    </>
  );
};
