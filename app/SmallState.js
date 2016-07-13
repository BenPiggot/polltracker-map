import React, { Component } from 'react';
import { render } from 'react-dom';

class SmallState extends Component {
  render() {
    console.log(this.props.position)
    return <div className={`mini-${this.props.stateName}`} style={{position: 'absolute', right: 8, top: this.props.position.y1}}>
      {this.props.stateName}
    </div>
  }
}

export default SmallState;