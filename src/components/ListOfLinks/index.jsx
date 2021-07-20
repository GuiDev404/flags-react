import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const ListOfLinks = ({ list, toggleVisibility }) => {
  return (
    <ul className="dropdown__list" style={toggleVisibility}>
      {list.map((region) => (
        <li key={region}>
          <NavLink to={`/${region.toLowerCase()}`} className='anchor_list'> {region} </NavLink>
        </li>
      ))}
    </ul>
  );
};

ListOfLinks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleVisibility: PropTypes.object.isRequired
}

export default ListOfLinks;
