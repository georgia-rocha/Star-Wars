import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchData } from '../services/fetchData';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    async function fetchDataApi() {
      const fetch = await fetchData();
      const fetchDataResult = fetch.results.map(({ residents, ...rest }) => rest);
      setPlanets(fetchDataResult);
      setFilteredPlanets(fetchDataResult);
    }
    fetchDataApi();
  }, []);

  const context = {
    planets,
    setPlanets,
    search,
    setSearch,
    filteredPlanets,
    setFilteredPlanets,
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
