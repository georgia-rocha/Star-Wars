import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterRow() {
  const { selectedFilter,
    setSelectedFilter,
    usedColumns,
    setUsedColumns,
    filterPlanets,
  } = useContext(PlanetContext);

  function handleClickRemoveFilter(column) {
    const removeFilter = selectedFilter.filter((el) => el.column !== column);

    setSelectedFilter(removeFilter);

    const newUsedColumn = usedColumns.filter((el) => el !== column);
    setUsedColumns(newUsedColumn);
    filterPlanets(removeFilter);

    console.log(removeFilter);
  }

  return (
    <div>
      {
        selectedFilter.map((filter, index) => (
          <div key={ index } data-testid="filter">
            <p>
              {filter.column}
              {' '}
              {filter.condition}
              {' '}
              {filter.value}
            </p>
            <button
              type="button"
              onClick={ () => handleClickRemoveFilter(filter.column) }
            >
              x
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default FilterRow;
