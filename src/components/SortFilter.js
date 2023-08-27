import React/* , { useContext } */ from 'react';
// import PlanetContext from '../context/PlanetContext';

function SortFilter() {
  const selectedOrder = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div className="flex bg-red">
      <label>
        Ordenar
        <select data-testid="column-sort">
          {
            selectedOrder
              .map((selected) => (
                <option key={ selected } value={ selected }>{ selected }</option>))
          }
        </select>
      </label>
      <label htmlFor="ascendente">
        <input
          type="radio"
          id="ascendente"
          // name={module}
          value="ASC"
          data-testid="column-sort-input-asc"
        //  checked={module === 'Ascendente'}
        // onChange={({target}) => setModule(target.value)}
        />
        Ascendente
      </label>
      <label htmlFor="descendente">
        <input
          type="radio"
          id="descendente"
          // name={module}
          value="DESC"
          data-testid="column-sort-input-desc"
        //  checked={module === 'Ascendente'}
        // onChange={({target}) => setModule(target.value)}
        />
        Descendente
      </label>
      <button type="button" data-testid="column-sort-button">Ordenar</button>
    </div>
  );
}

export default SortFilter;
