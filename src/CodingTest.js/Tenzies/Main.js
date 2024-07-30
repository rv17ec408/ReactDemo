import React, { useEffect, useState } from "react";
import Die from "./Die";
import { Button } from "@mui/material";
export const Main = () => {
  const [dice, setDice] = useState(getDice());
  // function firstTime() {}
  /*
first time initialize.
roll -> iterate dice-> if isHeld?return same_obj : update with new
onclick -> function(index)-> update indexed_obj -> setState

Find obj in a array, then return new object
  use map return new object
when we need to check all elements passes the condition
  .every()
    ex:- every element in array has same property value.
*/
  function getDice() {
    const newDice = []; //it is mutating the state, fix?
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
      });
    }
    return newDice;
  }
  // console.log(getDice());
  // useEffect(() => {
  //   setDiceValue(getDice());
  // }, []);
  function rollDice() {
    setDice(getDice());
  }
  const diceElements = dice.map((val, index) => (
    <Die
      key={index}
      id={index}
      isHeld={val.isHeld}
      value={val.value}
      handleIsHeld={handleIsHeld}
    />
  ));

  function handleIsHeld(id) {
    console.log("id", id);
  }
  return (
    <main className="tenziesContainer">
      <div className="dieContainer">{diceElements}</div>

      <Button className="roll-button" onClick={rollDice}>
        Roll
      </Button>
    </main>
  );
};
