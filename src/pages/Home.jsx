import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Flags from '../components/Flags'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import Header from '../components/Header'

const Home = ({ flags_request }) => {
  const [search, setSearch] = useState('');
  
  return (
    <>
      <Header>
        <Search search={search} setSearch={setSearch} />
        <Dropdown />
      </Header>
      <Flags flags_request={flags_request} search={search} />
    </>
  )
}

Home.propTypes = {
  flags_request: PropTypes.object.isRequired
}

export default Home

