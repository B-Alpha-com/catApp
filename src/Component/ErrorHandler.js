import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorBoundary: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ errorBoundary: true });
  }
  render() {
    const { errorBoundary } = this.state;
    return errorBoundary === true ? (
      <h1>we will fix it</h1>
    ) : (
      this.props.children
    );
  }
}
export default ErrorBoundary;
