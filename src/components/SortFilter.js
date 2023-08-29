import React/* , { useContext } */ from 'react';
// import PlanetContext from '../context/PlanetContext';

function SortFilter() {
  const selectedOrder = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div className="flex bg-red text-white items-center">
      <label className="flex flex-col text-white w-28">
        Ordenar
        <select data-testid="column-sort" className="p-2 bg-transparent border-b-2">
          {
            selectedOrder
              .map((selected) => (
                <option key={ selected } value={ selected }>{ selected }</option>))
          }
        </select>
      </label>
      <div className="flex flex-col ml-4">
        <label htmlFor="ascendente" className="">
          <input
            type="radio"
            id="ascendente"
            // name={module}
            value="ASC"
            className="mr-2"
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
            className="mr-2"
            // name={module}
            value="DESC"
            data-testid="column-sort-input-desc"
          //  checked={module === 'Ascendente'}
          // onChange={({target}) => setModule(target.value)}
          />
          Descendente
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        className=" border-2 border-yellow-400 ml-4 h-16 w-24 rounded-md"
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortFilter;
