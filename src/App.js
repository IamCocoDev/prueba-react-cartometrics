import React from 'react';
import Map from './components/Map';
import Panel from './components/Panel/Panel';
import ParcelProvider from './context/ParcelContext';

function App(props) {
  return (
    <ParcelProvider>
      <Panel />
      <Map />
    </ParcelProvider>
  );
}

export default App;