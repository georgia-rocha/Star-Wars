import React from 'react';

function TableHeader() {
  const header = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];
  return (
    <thead>
      <tr>
        { header.map((h, index) => (
          <th key={ index }>{ h }</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
