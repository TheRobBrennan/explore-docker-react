import React from 'react';
import { useCounter } from '../../store/useCounter';

export const ChildComponentWithCustomUseCounterHook = () => {
  const { count, message, increment, decrement, reset } = useCounter();

  return (
    <div>
      <button
        onClick={() => increment()}
      >
        +
      </button>
      {count}
      <button
        onClick={() => decrement()}
      >
        -
      </button>
      <button onClick={() => reset()}>
        Reset
      </button>
      <br />
      {message}
    </div>
  );
};
