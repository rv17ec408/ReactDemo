import React, { useEffect, useState } from "react";

const PureFunctionalComponentDemo = (props) => {
  console.log("child is re-rendered");
  return <div>name is {props.name} </div>;
};
export default React.memo(PureFunctionalComponentDemo);

export const App = () => {
  const [name, setName] = useState({});
  useEffect(() => {
    function updateName() {
      setName("Same_Name");
    }
    setInterval(updateName, 1000);
    // return function(){
    //   window.clearInterval(updateName);
    // }
  }, []);
  console.log("Parent is re-rendered");
  return <PureFunctionalComponentDemo name={name} />;
};
