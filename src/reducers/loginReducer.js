const initialState = {
  username: "",
  password: "",
  isAuthenticated: ""
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "async_login":
      return { ...state };
    case "async_logout":
      return { ...state };
    default:
      return { ...state };
  }
}
