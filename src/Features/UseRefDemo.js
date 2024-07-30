import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

/*
1. make input is foused when app rendered.
2. when button clicked, alert with input text
3. Clear SetInterval when button clicked.
    store reference of setInterval in useEffect to useRef and  use this to clearInterval.
*/
export const UseRefDemo = () => {
  const ref = useRef(null);
  function alertHandler() {
    alert(ref.current.value);
  }
  useEffect(() => {
    ref.current.focus();
    console.log(ref);
  }, []);

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={alertHandler}>Click</button>
      <p>Timer - {timer}</p>
      <Button onClick={() => clearInterval(intervalRef.current)}>
        CLear Interval
      </Button>
    </div>
  );
};
