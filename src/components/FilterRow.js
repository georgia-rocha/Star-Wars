import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import remove from '../remove.png';

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
  }

  return (
    <div>
      {
        selectedFilter.map((filter, index) => (
          <div
            key={ index }
            data-testid="filter"
            className="flex text-white font-bold justify-center"
          >
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
              <img src={ remove } alt="icon remove" className="h-6 pl-2" />
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default FilterRow;
