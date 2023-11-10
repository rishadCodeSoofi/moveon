import React from 'react';
import './Vehicle.css';

const Vehicle = ({ direction }) => {
  return <div className={`vehicle ${direction}`}></div>;
};

export default Vehicle;
