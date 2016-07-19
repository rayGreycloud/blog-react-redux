import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      This is the App component
      {this.props.children}
      </div>

    );
  }
}
