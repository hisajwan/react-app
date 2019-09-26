import React, { Component } from "react";

class Login extends Component {
  state = {
    isLoaded: false,
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  // fetch post data
  // fetchPostData = async () => {
  //   const postRequest = fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({})
  //   });
  // };

  fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    console.log(items);
    this.setState({ isLoaded: true, data: items });
  };

  // fetchData() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ isLoaded: true, data: data });
  //       console.log("data", this.state);
  //     })
  //     .catch(() => {});
  // }

  render() {
    let { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        {this.props.children}
        <div>{this.props.userName}</div>
        <ul>
          {data.map(value => {
            return <li key={value.username}>{value.username}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Login;
