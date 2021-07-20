import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children }) => {
  return (
    <header className='d-flex justify-content-between align-items-center header_search_dropdown'>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Header
