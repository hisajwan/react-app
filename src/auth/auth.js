class Auth {
  constructor() {
    this.authenticated = false;
  }
  login = (cb, userDetails = {}) => {
    let userData;
    if (
      Object.keys(userDetails).length > 0 &&
      userDetails.constructor === Object
    ) {
      if (
        userDetails.username === "xebia" &&
        userDetails.password === "xebia"
      ) {
        this.authenticated = true;
        userData = { ...userDetails, authenticated: this.authenticated };
      } else {
        userData = undefined;
      }
    }
    cb();
    return userData;
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
