import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{marginTop: '10px'}}>
        {this.props.children}
      </div>
    );
  }
}
