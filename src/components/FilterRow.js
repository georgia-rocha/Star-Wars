import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterRow() {
  const { selectedFilter, setSelectedFilter } = useContext(PlanetContext);

  function handleClick(index) {
    selectedFilter.splice(index, 1);
    console.log(selectedFilter);
    setSelectedFilter(selectedFilter);
    console.log(selectedFilter);
  }

  return (
    <div>
      {
        selectedFilter.map((filter, index) => (
          <div key={ index }>
            <p>
              {filter.column}
              {' '}
              {filter.condition}
              {' '}
              {filter.value}
            </p>
            <button type="button" onClick={ () => handleClick(index) }>x</button>
          </div>
        ))
      }
    </div>
  );
}

export default FilterRow;
