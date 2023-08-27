import React from 'react';
import Table from '../components/Table';

import Filters from '../components/Filters';
import FilterRow from '../components/FilterRow';
import bg from '../logo.svg';

function Home() {
  return (
    <main className="bg-backgroundStar bg-no-repeat h-screen w-screen bg-cover bg-left-top saturate-200 flex flex-col">
      <img src={ bg } alt="star-wars" className="p-10" />
      <div className="border-white border-2 rounded-md mx-16">
        <Filters />
        <FilterRow />
        <Table />
      </div>
    </main>
  );
}

export default Home;
