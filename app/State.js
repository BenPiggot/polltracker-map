import React, { Component } from 'react';
import { render } from 'react-dom';

class State extends Component {
  render() {
    if (!this.props.boxDimensions)
      return <path style={{fill: 'lightblue', stroke: 'white'}} className={this.props.stateName} d={this.props.path} strokeWidth={1} strokeLinejoin="round"></path>
    else {
      console.log(this.props.stateName)
      return <g>
        <path style={{fill: 'blue', stroke: 'white'}} className={this.props.stateName} d={this.props.path} strokeWidth={1} strokeLinejoin="round"></path>
        <rect style={{fill: 'white', stroke: '#aaa'}} height="20" width="50" x="950" y={this.props.boxDimensions.y2}></rect>
        <text x="950" y={parseInt(this.props.boxDimensions.y2) + 10} style={{fontSize: 10, fontFamily: 'helvetica'}}>{this.props.stateName}</text>
      </g>
    }
  }
}

export default State;