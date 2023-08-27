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
      <label className="w-1/4 border-2 text-xl p-1 rounded-md text-white border-white flex m-6">
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          className="w-full h-full p-1 bg-transparent outline-none"
          value={ search }
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        <img src={ icon } alt="search" className="w-8" />
      </label>
      <div className="w-full h-20 flex justify-around gap-7 grid-cols-7">
        <label htmlFor="column-filter" className="flex flex-col">
          Coluna
          <select
            name="column"
            id="column-filter"
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
        <label htmlFor="comparison-filter" className="flex flex-col">
          Operador
          <select
            name="condition"
            data-testid="comparison-filter"
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
          placeholder="Digite um valor"
          value={ selected.value }
          onChange={ handleChangeSelected }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={
            () => handleFilterClick([...selectedFilter, selected])
          }
        >
          Filtrar
        </button>
        <SortFilter />
        <button
          className="clear"
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
