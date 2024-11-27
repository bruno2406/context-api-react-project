import { useCounterContext } from "../../contexts/CounterContext";
import React from "react";

export const Heading = () => {
  const [state] = useCounterContext();

  return (
    <h1 style={{ fontSize: '30px' }}>{state.counter}</h1>
  )
}
