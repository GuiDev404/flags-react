import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Flag from '../components/Flag'
import Button from '../components/Button';

const FlagDetails = ({ flags_request }) => {
  const { code } = useParams();
  const { response, isLoading, error } = flags_request;

  if(isLoading){
    return null;
  } else {
    if(error) return console.log(error)

    const [ country ] = response.filter(flag=> flag.alpha2Code === code);
    const handleClick = ()=> window.history.back();

    return <>
      <Button handleClick={handleClick} styles='btn-back'> 
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
      </Button>
      <Flag 
        singleFlag={true}
        id={country.alpha2Code}
        imgUrl={country.flag}
        countryName={country.name}
        info={[
          { name: 'Native Name' , value: country.nativeName },
          { name: 'Population' , value: country.population },
          { name: 'Region' , value: country.region },
          { name: 'Sub Region' , value: country.subregion },
          { name: 'Capital' , value: country.capital },
          { name: 'Top Level Domain' , value: country.topLevelDomain.join(', ') },
          { name: 'Currencies' , value: country.currencies.map(ele=> ele.name).join(', ') },
          { name: 'Languages' , value: country.languages.map(ele=> ele.name).join(', ') },
        ]}
        borderCountries={country.borders}
      />
    </>
    }

}

FlagDetails.propTypes = {
  flags_request: PropTypes.object.isRequired
}

export default FlagDetails
