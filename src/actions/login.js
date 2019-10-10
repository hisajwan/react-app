import { login, logout } from "./types";

export const login = userDetails => ({
  type: login,
  payload: { ...userDetails }
});

export const logout = userDetails => ({
  type: logout,
  payload: { ...userDetails }
});
