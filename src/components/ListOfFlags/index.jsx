import React from "react";
import Flag from "../Flag";
import PropTypes from 'prop-types'

const index = ({ flags }) => {
  return flags.map((country) => (

    <Flag
      key={country.cca2}
      id={country.cca2}
      imgUrl={country.flags?.svg || country.flags?.png}
      countryName={country.name.common}
      info={[
        { name: "Population", value: country.population },
        { name: "Region", value: country.region },
        { name: "Capital", value: country.capital?.[0] || '' },
      ]}
    />
  ));
};

index.propTypes = {
  flags: PropTypes.array.isRequired
}

export default React.memo(index);
