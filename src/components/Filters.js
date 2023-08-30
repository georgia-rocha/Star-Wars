import React, { useContext } from 'react';
import icon from '../search.svg';
import PlanetContext from '../context/PlanetContext';
import SortFilter from './SortFilter';

function Filters() {
  const { data,
    setFilteredPlanets,
    selected,
    search,
    setSearch,
    setSelected,
    setSelectedFilter,
    selectedFilter,
    handleFilterClick,
    filterColumn,
    filterPlanets } = useContext(PlanetContext);

  function handleChangeSelected({ target: { name, value } }) {
    setSelected({ ...selected, [name]: value });
  }

  function handleChange(value) {
    setSearch(value);
    const filterByName = data
      .filter((planet) => (value !== '' ? planet.name.toUpperCase()
        .includes(value.toUpperCase()) : planet));
    setFilteredPlanets(filterByName);
  }

  return (
    <div className="flex flex-col items-center mb-8">
      <label
        className="w-2/4 border-2 text-xl
          pl-1 rounded-md text-white border-white flex m-6"
      >
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          className="w-full bg-transparent outline-none"
          value={ search }
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        <img src={ icon } alt="search" className="w-7 p-1" />
      </label>
      <div
        className="h-10 flex justify-around gap-7
          font-bold grid-cols-7 my-2 items-center w-full"
      >
        <label htmlFor="column-filter" className="flex flex-col text-white">
          Coluna
          <select
            name="column"
            id="column-filter"
            className="p-2 bg-transparent border-b-2"
            data-testid="column-filter"
            value={ selectedFilter.column }
            onChange={ handleChangeSelected }
          >
            { filterColumn.map((column) => (
              <option key={ column } value={ column }>
                { column }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter" className="flex flex-col text-white">
          Operador
          <select
            name="condition"
            data-testid="comparison-filter"
            className="p-2 bg-transparent border-b-2"
            value={ selectedFilter.condition }
            onChange={ handleChangeSelected }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          placeholder="Digite"
          value={ selected.value }
          className="bg-transparent text-white border-2
            h-16 w-24 border-yellow-500 text-center outline-none rounded-md"
          onChange={ handleChangeSelected }
        />
        <button
          type="button"
          data-testid="button-filter"
          className="text-white border-2 h-16 w-24 border-yellow-500 rounded-md"
          onClick={
            () => handleFilterClick([...selectedFilter, selected])
          }
        >
          Filtrar
        </button>
        <SortFilter />
        <button
          className="clear text-white border-2 border-yellow-400 h-16 w-24 rounded-md"
          data-testid="button-remove-filters"
          onClick={ () => {
            setSelectedFilter([]);
            filterPlanets([]);
          } }
        >
          REMOVER FILTROS
        </button>
      </div>
    </div>
  );
}

export default Filters;
