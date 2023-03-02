import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { data,
    setFilteredPlanets,
    selected,
    search,
    setSearch,
    setSelected,
    setSelectedFilter,
    selectedFilter,
    selectColumn,
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

  /*   function handleFilterClick(filters) {
    setSelectedFilter(filters);
    filterPlanets(filters);

    const newSelectColumn = selectColumn.filter((el) => el !== selected.column);
    setSelected({ ...selected, column: newSelectColumn[0] });
    setSelectedColumn(newSelectColumn);
  } */

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          value={ search }
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
      </div>
      <label htmlFor="column-filter">
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
      <label htmlFor="comparison-filter">
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
  );
}

export default Filters;
