import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchData } from '../services/fetchData';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectColumn, setSelectedColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [usedColumns, setUsedColumns] = useState([]);
  const [selected, setSelected] = useState({
    column: 'population',
    condition: 'maior que',
    value: '0',
  });

  useEffect(() => {
    async function fetchDataApi() {
      const fetch = await fetchData();
      const fetchDataResult = fetch.results.map(({ residents, ...rest }) => rest);
      setData(fetchDataResult);
      setFilteredPlanets(fetchDataResult);
    }
    fetchDataApi();
  }, []);

  const filterPlanets = (allFilters) => {
    let cloneApi = data;
    allFilters.forEach((filter) => {
      switch (filter.condition) {
      case 'maior que':
        cloneApi = cloneApi
          .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        cloneApi = cloneApi
          .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        cloneApi = cloneApi
          .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
        break;
      default:
        break;
      }
    });
    setFilteredPlanets(cloneApi);
  };

  function handleFilterClick(filters) {
    setSelectedFilter(filters);
    filterPlanets(filters);

    const newSelectColumn = selectColumn.filter((el) => el !== selected.column);
    setSelected({ ...selected, column: newSelectColumn[0] });
    setUsedColumns([...usedColumns, selected.column]);
  }

  const filterColumn = selectColumn.filter((column) => !usedColumns.includes(column));

  const context = {
    data,
    setData,
    search,
    setSearch,
    filteredPlanets,
    setFilteredPlanets,
    selected,
    setSelected,
    selectedFilter,
    setSelectedFilter,
    filterPlanets,
    selectColumn,
    setSelectedColumn,
    handleFilterClick,
    usedColumns,
    setUsedColumns,
    filterColumn,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
