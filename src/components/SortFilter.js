import React/* , { useContext } */ from 'react';
// import PlanetContext from '../context/PlanetContext';

function SortFilter() {
  const selectedOrder = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div className="flex bg-red">
      <label className="flex flex-col">
        Ordenar
        <select data-testid="column-sort">
          {
            selectedOrder
              .map((selected) => (
                <option key={ selected } value={ selected }>{ selected }</option>))
          }
        </select>
      </label>
      <div className="flex flex-col">
        <label htmlFor="ascendente" className="">
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
      </div>
      <button type="button" data-testid="column-sort-button">Ordenar</button>
    </div>
  );
}

export default SortFilter;
