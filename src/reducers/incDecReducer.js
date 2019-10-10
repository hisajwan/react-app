import { decrement } from "../actions/types";

const initialState = {
  value: 20
};

export default function(state = initialState, action) {
  console.log("incDECREDUCER");
  switch (action.type) {
    case "async_increment":
      console.log("1");
      state.value += action.payload.value;
      return { ...state };
    case decrement:
      console.log("2");
      state.value -= action.payload.value;
      return { ...state };
    default:
      console.log("def");
      return state;
  }
}
