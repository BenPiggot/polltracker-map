import React, { Component } from 'react';
import { render } from 'react-dom';
import MapPaths from './state-data.js';
import _ from 'lodash';
import State from './State.js';

class MapContainer extends Component {
  render() {
    const states = _.reduce(MapPaths.paths, (memo, v, k) => {
      const boxDimensions = _.includes(Object.keys(MapPaths.callouts), k) ? MapPaths.callouts[k] : null;
      return memo.concat(<State stateName={k} path={v} boxDimensions={boxDimensions} />)
    }, [])

    return <div>
      <h1>Polltracker 2016</h1>
      <svg height={800} width={1000}>
        { states }
      </svg>
    </div>
  }
};

render(<MapContainer />, document.getElementById('root'));