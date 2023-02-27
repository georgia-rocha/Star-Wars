import React, { useContext } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  // const { planets } = useContext();
 // console.log(planets);
  return (
    <div>
      <TableHeader />
      {/* <tbody>
        {planets.map((planet) => (
          <TableBody key={ planet.name } />
        ))}
      </tbody> */}
    </div>
  );
}

export default Table;
