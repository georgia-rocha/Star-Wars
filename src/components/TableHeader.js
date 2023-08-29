import React from 'react';

function TableHeader() {
  const header = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];
  return (
    <thead className="bg-zinc-800 text-white text-center">
      <tr>
        { header.map((h, index) => (
          <th key={ index }>{ h }</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
