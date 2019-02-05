import React, { Component } from "react";
import { Link } from "react-router-dom";
class Error extends Component {
  render() {
    return (<div>
      <h1>Page not found</h1>
      <Link to="/">home</Link>
    </div>);
  }
}

export default Error;
