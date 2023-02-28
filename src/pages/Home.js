import React, { useContext } from 'react';
import Table from '../components/Table';
import PlanetContext from '../context/PlanetContext';
import Filters from '../components/Filters';

function Home() {
  const { setSearch, planets, setFilteredPlanets } = useContext(PlanetContext);

  function handleChange(value) {
    setSearch(value);
    const filterByName = planets
      .filter((planet) => (value !== '' ? planet.name.toUpperCase()
        .includes(value.toUpperCase()) : planet));
    setFilteredPlanets(filterByName);
  }

  return (
    <main>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ ({ target: { value } }) => handleChange(value) }
      />
      <Filters />
      <Table />
    </main>
  );
}

export default Home;
