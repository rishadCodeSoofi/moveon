import React from 'react';
import './TrafficSignal.css';
import Vehicle from './Vehicle';

const TrafficSignal = ({ signalColors }) => {
  const { north, south, east, west } = signalColors;

  return (
    <div className="junction">
      <div className={`road x-axis ${north === 'green' ? 'active' : ''}`}>
        <Vehicle direction="south" />
      </div>
      <div className={`road x-axis ${south === 'green' ? 'active' : ''}`}>
        <Vehicle direction="north" />
      </div>
      <div className={`road y-axis ${east === 'green' ? 'active' : ''}`}>
        <Vehicle direction="west" />
      </div>
      <div className={`road y-axis ${west === 'green' ? 'active' : ''}`}>
        <Vehicle direction="east" />
      </div>

      <div className="roundabout">
        <div className={`light north ${north}`}></div>
        <div className={`light south ${south}`}></div>
        <div className={`light east ${east}`}></div>
        <div className={`light west ${west}`}></div>
      </div>
    </div>
  );
};

export default TrafficSignal;
