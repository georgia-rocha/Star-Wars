import React from 'react';
import Table from '../components/Table';

import Filters from '../components/Filters';
import FilterRow from '../components/FilterRow';

function Home() {
  return (
    <main>
      <h1>Projeto Star Wars - Trybe</h1>
      <Filters />
      <FilterRow />
      <Table />
    </main>
  );
}

export default Home;
