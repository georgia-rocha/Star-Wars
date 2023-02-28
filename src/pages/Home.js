import React, { useContext } from 'react';
import Table from '../components/Table';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const { setSearch, planets, setFilteredPlanets } = useContext(PlanetContext);

  function handleChange(value) {
    setSearch(value);
    const filterInput = planets
      .filter((planet) => (value !== '' ? planet.name.includes(value) : planet));
    setFilteredPlanets(filterInput);
  }

  return (
    <main>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => handleChange(value) }
      />
      <Table />
    </main>
  );
}

export default Home;
