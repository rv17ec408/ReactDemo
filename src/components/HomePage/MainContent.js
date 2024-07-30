import React from "react";

export const MainContent = (props) => {
  console.log("main", props);
  console.log(
    ["one", "two"].map((str) => {
      const charAt = str.at(0).toUpperCase();
      const charAtAlt = str[0].toUpperCase();
      // return `${a}${str.substring(1, str.length)}`;
      return charAtAlt.toUpperCase() + str.slice(1);
    })
  );
  return <div>MainContent</div>;
};
