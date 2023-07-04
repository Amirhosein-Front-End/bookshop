import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    }
  }
  
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    })
  }

  render() { 

      if (this.state.error) {
        return <h3>درحال بارگزاری ...</h3>
      }

      return this.props.children
  }
}
 
export default ErrorBoundry;