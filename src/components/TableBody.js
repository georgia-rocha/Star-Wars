import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

function TableBody({ planet }) {
  return (
    <tr
      className="border-b-4 border-white
        bg-gray-700 opacity-90 text-white font-semibold text-center"
    >
      <td className="border-r-4 px-4">{planet?.name}</td>
      <td className="border-r-4 px-16">{planet?.rotation_period}</td>
      <td className="border-r-4 px-10">{planet?.orbital_period}</td>
      <td className="border-r-4 px-9">{planet?.diameter}</td>
      <td className="border-r-4 px-9">{planet?.climate}</td>
      <td className="border-r-4 px-9">{planet?.gravity}</td>
      <td className="border-r-4 px-9">{planet?.terrain}</td>
      <td className="border-r-4 px-9">{planet?.surface_water}</td>
      <td className="border-r-4 px-9">{planet?.population}</td>
      <td className="border-r-4">
        <ul className="flex flex-col w-24 items-center">
          {planet?.films.map((film, index) => (
            <li key={ index } className="flex">
              <a href={ film } target="_blank" rel="noreferrer">
                Filme
                {' '}
                { index + 1}
              </a>
            </li>
          ))}
        </ul>
      </td>
      <td className="border-r-4 px-3">
        <Moment format="DD/MM/YYYY">
          {planet?.created}
        </Moment>
      </td>
      <td className="border-r-4 px-3">
        <Moment format="DD/MM/YYYY">
          {planet?.edited}
        </Moment>
      </td>
      <td className="border-r-4 items-center px-3">
        <a href={ planet?.url } target="_blank" rel="noreferrer">
          URL
        </a>
      </td>
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
