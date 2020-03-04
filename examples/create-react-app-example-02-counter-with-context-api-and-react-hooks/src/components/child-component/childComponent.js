import React from "react";
import { useStore } from "../../store/store";

export const ChildComponent = () => {
  const {state, dispatch} = useStore();

  return (
    <div>
      <button onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
      {state.count}
      <button onClick={() => dispatch({type: "decrement", message: "Decremented"})}>-</button>
      <button onClick={() => dispatch({type: "reset", message: "Reset"})}>Reset</button>
      <br />
      {state.message}
    </div>
  )
}