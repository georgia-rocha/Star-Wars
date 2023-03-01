import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchData } from '../services/fetchData';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
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
    allFilters.forEach((filter) => {
      const filtered = filteredPlanets.filter((planet) => {
        switch (filter.condition) {
        case 'maior que':
          return Number(planet[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(planet[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(planet[filter.column]) === Number(filter.value);
        default:
          return true;
        }
      });
      setFilteredPlanets(filtered);
    });
  };

  const context = {
    data,
    setData,
    search,
    setSearch,
    filteredPlanets,
    setFilteredPlanets,
    selected,
    setSelected,
    filterPlanets,
    setSelectedFilter,
    selectedFilter,
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
