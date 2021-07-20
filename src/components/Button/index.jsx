import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ isAnchor, link, styles, children, handleClick }) => {
  return isAnchor 
    ? <Link to={link || ''} className={styles}> {children} </Link> 
    : <button className={styles} onClick={handleClick}> {children} </button>
}

Button.propTypes = {
  isAnchor: PropTypes.bool,
  link: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  handleClick: PropTypes.func,
}

export default Button
