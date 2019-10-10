class Auth {
  constructor() {
    this.authenticated = false;
  }
  login = (cb, userDetails = {}) => {
    if (
      Object.keys(userDetails).length > 0 &&
      userDetails.constructor === Object
    ) {
      if (
        userDetails.username === "xebia" &&
        userDetails.password === "xebia"
      ) {
        this.authenticated = true;
        return { ...userDetails, authenticated: this.authenticated };
      } else {
        return undefined;
      }
    }
    cb();
  };
  logout = cb => {
    this.authenticated = false;
    cb();
  };
  isAuthenticated = () => {
    return this.authenticated;
  };
}
export default new Auth();
