import React, { Component } from 'react';
import { render } from 'react-dom';


class State extends Component {
  status(stateData) {
    switch(stateData) {
      case 'Tossup':
        return '#f2e6c4'
      case 'Leans Clinton':
        return '#bdcee1'
      case 'Favors Clinton':
        return '#6a84b5'
      case 'Strongly Clinton':
        return 
      case 'Leans Trump':
        return '#bdcee1'
      case 'Favors Trump':
        return
      case 'Strongly Trump':
        return '#9f0000'
      default:
        return 'lightblue'
    }
  }

  handleMouseOver(event) {
    console.log(event)
  }

  render() {
    const data = this.props.data ? this.props.data.classification : null; 
    if (!this.props.boxDimensions)
      return <path style={{fill: this.status(data), stroke: 'white'}} 
        onMouseOver={this.handleMouseOver}
        className={this.props.stateName} 
        d={this.props.path} strokeWidth={1} 
        strokeLinejoin="round"> 
      </path>
    else {
      return <g>
        <path style={{fill: this.status(data), stroke: 'white'}} 
          onMouseOver={this.handleMouseOver}
          className={this.props.stateName} 
          d={this.props.path} strokeWidth={1} 
          strokeLinejoin="round">
        </path>
        <rect style={{fill: 'white', stroke: '#aaa'}} height="20" width="50" x="950" 
          y={this.props.boxDimensions.y2}>
        </rect>
        <text x="950" y={parseInt(this.props.boxDimensions.y2) + 10} 
          style={{fontSize: 10, fontFamily: 'helvetica'}}>{this.props.stateName}
        </text>
      </g>
    }
  }
}

export default State;