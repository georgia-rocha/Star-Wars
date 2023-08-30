import React from 'react';
import Table from '../components/Table';

import Filters from '../components/Filters';
import FilterRow from '../components/FilterRow';
import bg from '../logo.svg';

function Home() {
  return (
    <main
      className="
        bg-backgroundStar
        bg-no-repeat
        h-screen w-screen bg-cover
        bg-left-top flex flex-col justify-center items-center"
    >
      <img src={ bg } alt="star-wars" className="p-5 h-40" />
      <div
        className="h-full w-5/6 flex
          flex-col justify-center border-white border-2 rounded-md mx-16"
      >
        <Filters />
        <FilterRow />
        <Table />
      </div>
    </main>
  );
}

export default Home;
