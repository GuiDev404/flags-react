import React from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ListOfFlags from '../ListOfFlags'
import { ListOfFlagsLoader } from '../FlagLoader';

import './styles.css'; 

const lower = str=> str.toLowerCase();
const LIMITE = 20;

const Flags = ({ flags_request, search }) => {
  const { response, isLoading, error } = flags_request;
  const { region } = useParams();

  if(isLoading){
    return <div className="flags">
      <ListOfFlagsLoader singleFlag={false} />
    </div>
  } else {

    const countries = (region && region !== 'all')
      ? response.filter(country => lower(country.region) === region).slice(0, LIMITE)
      : response.slice(0, LIMITE);

    const countriesBySearch = countries && countries.filter(country=> lower(country.name.common).includes(search))
  
    if(error){
      console.log(error)
    }

    return (
      <div className="flags">
        {countriesBySearch.length 
          ? <ListOfFlags flags={countriesBySearch} />
          : <h2 className="no-results">There are no countries for the {search}</h2>
        }
      </div>
    );
  }

}

Flags.propTypes = {
  flags_request: PropTypes.object,
  search: PropTypes.string.isRequired
}


export default React.memo(Flags)
