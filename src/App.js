import React from 'react';
import Home from './pages/Home';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Home />
    </PlanetProvider>
  );
}

export default App;
