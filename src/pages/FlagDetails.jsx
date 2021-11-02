import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Flag from '../components/Flag'
import Button from '../components/Button';
import { FlagLoader } from '../components/FlagLoader';

const FlagDetails = ({ flags_request }) => {
  const { code } = useParams();
  const { response, isLoading, error } = flags_request;
   
    if(error) return console.log(error)
    const responseFiltered = !isLoading && response.filter(flag=> flag.cca2 === code || flag.cca3 === code);
    const country = !isLoading &&  responseFiltered[0];
    const handleClick = ()=> window.history.back();
    
    const currencies = !isLoading &&  country.currencies;
    const currenciesFormatted = !isLoading &&  Object.keys(country.currencies)
      .map((currencyKey) => Object.values(currencies[currencyKey]).join(' - ')  )

    return <>
      <Button handleClick={handleClick} styles='btn-back'> 
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
      </Button>
      {isLoading
        ? <FlagLoader singleFlag />
        : <Flag 
          singleFlag={true}
          id={country.cca2}
          imgUrl={country.flags?.svg || country.flags?.png}
          countryName={country.name.common}
          info={[
            { name: 'Native Name' , value: country.name?.official || country.name.common},
            { name: 'Population' , value: country.population },
            { name: 'Region' , value: country.region },
            { name: 'Sub Region' , value: country.subregion },
            { name: 'Capital' , value: country.capital },
            { name: 'Top Level Domain' , value: country.tld ? country.tld.join(', ') : 'No Domain' },
            { name: 'Currencies' , value: currenciesFormatted },
            { name: 'Languages' , value: Object.values(country.languages).join(' - ') },
          ]}
          borderCountries={country?.borders || []}
        />
      }
     
    </>
}

FlagDetails.propTypes = {
  flags_request: PropTypes.object.isRequired
}

export default FlagDetails
