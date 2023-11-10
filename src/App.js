import React, { useState, useEffect } from 'react';
import TrafficSignal from './TrafficSignal';

const App = () => {
  const [signalColors, setSignalColors] = useState({
    north: 'red',
    south: 'red',
    east: 'green',
    west: 'green',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalColors((prevColors) => ({
        north: prevColors.south,
        south: prevColors.north,
        east: prevColors.west,
        west: prevColors.east,
      }));
    }, 3000); // Change signal every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>MoveOn</h1>
      <TrafficSignal signalColors={signalColors} />
    </div>
  );
};

export default App;
