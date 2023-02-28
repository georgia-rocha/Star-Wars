import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { planets } = useContext(PlanetContext);
  console.log(planets);
  return (
    <div>
      <label htmlFor="column-filter">
        Coluna
        <select name="column-filter" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select name="comparison-filter" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" placeholder="Digite um valor" />
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}

export default Filters;
