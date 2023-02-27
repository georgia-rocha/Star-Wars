import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { fetchData } from '../services/fetchData';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  console.log(PlanetContext);

  /*  useEffect(() => {
    async function fetchDataApi() {
      const fetch = await fetchData();
      const fetchDataResult = fetch.results.map(({ residents, ...rest }) => rest);
      setPlanets(fetchDataResult);
    }
    fetchDataApi();
  }, []); */

  const context = {
    planets,
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
