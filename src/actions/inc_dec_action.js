import { increment, decrement } from "./types";

export const incrementAction = input => {
  const output = {
    type: increment,
    payload: {
      value: 1
    }
  };
  console.log(output);
  return output;
};

export const decrementAction = input => {
  const output = {
    type: decrement,
    payload: {
      value: 1
    }
  };
  return output;
};
