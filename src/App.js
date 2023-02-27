import React from 'react';
import Home from './pages/Home';
import PlanetProvider from './context/PlanetContext';

function App() {
  return (
    <PlanetProvider>
      <Home />
    </PlanetProvider>
  );
}

export default App;
