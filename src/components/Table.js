import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  const { filteredPlanets } = useContext(PlanetContext);

  return (
    <table>
      <TableHeader />
      <tbody>
        {filteredPlanets.map((planet) => (
          <TableBody planet={ planet } key={ planet.name } />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
