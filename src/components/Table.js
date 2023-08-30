import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  const { filteredPlanets } = useContext(PlanetContext);

  return (
    <div className="w-full h-64 overflow-x-auto overflow-y-auto">
      <table border="1" className="items-center w-auto">
        <TableHeader />
        <tbody className="w-1/3 h-4-1/3">
          {filteredPlanets.map((planet) => (
            <TableBody planet={ planet } key={ planet.name } />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
