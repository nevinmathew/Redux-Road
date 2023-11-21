import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GATHER, TIPPED_WAGON, TRAVEL } from './redux/actions';

function App() {

  const wagon = useSelector((state) => state.wagon);
  const dispatch = useDispatch();
  
  const handleSupplies = () => {
    dispatch({type: GATHER})
  };

  const handleTravel = (daysOnRoad) => {
    dispatch({type: TRAVEL, payload: daysOnRoad})  
  };

  const handleTippedWagon = () => {
    dispatch({type: TIPPED_WAGON})
  };

  return (
    <div>
      <h1>Redux Adventure Game</h1>
      <p>Supplies: {wagon.supplies}</p>
      <p>Distance: {wagon.distanceTravelled}</p>
      <p>Days: {wagon.daysOnRoad}</p>

      <button onClick={handleSupplies}>Gather supplies</button>
      <button onClick={() => handleTravel(1)}>Travel 1 day</button>
      <button onClick={handleTippedWagon}>Tipped wagon</button>
    </div>
  )
}

export default App
