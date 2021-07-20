import React from "react";
import Flag from "../Flag";
import PropTypes from 'prop-types'

const index = ({ flags }) => {
 
  return flags.map((country) => (
    <Flag
      key={country.alpha2Code}
      id={country.alpha2Code}
      imgUrl={country.flag}
      countryName={country.name}
      info={[
        { name: "Population", value: country.population },
        { name: "Region", value: country.region },
        { name: "Capital", value: country.capital },
      ]}
    />
  ));
};

index.propTypes = {
  flags: PropTypes.array.isRequired
}

export default React.memo(index);
