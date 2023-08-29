import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ planet }) {
  return (
    <tr className="h-20 border-b-2 border-white bg-slate-500 opacity-90 text-white font-semibold text-lg text-center">
      <td>{planet?.name}</td>
      <td>{planet?.rotation_period}</td>
      <td>{planet?.orbital_period}</td>
      <td>{planet?.diameter}</td>
      <td>{planet?.climate}</td>
      <td>{planet?.gravity}</td>
      <td>{planet?.terrain}</td>
      <td>{planet?.surface_water}</td>
      <td>{planet?.population}</td>
      <td>{planet?.films.join(', ')}</td>
      <td>{planet?.created}</td>
      <td>{planet?.edited}</td>
      <td>{planet?.url}</td>
    </tr>
  );
}

TableBody.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default TableBody;
