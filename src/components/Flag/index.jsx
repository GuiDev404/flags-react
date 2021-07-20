import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import './styles.css'; 

const Flag = ({ imgUrl, countryName, info, borderCountries, singleFlag, id }) => {
  const { push } = useHistory()

  const redirectToSingle = ()=> {
    push(`/country/${id}`)
  }

  return (
    <div onClick={redirectToSingle} className={`${singleFlag ? 'single-flag' : 'flag'}`}>
      <img src={imgUrl} title={countryName} loading='lazy' className='flag__img' alt={`Flag of ${countryName}`} />

      <div className="flag__content">
        <h2 className='flag__content-title'>{countryName}</h2>
        <div className={singleFlag ? 'grid' : ''}>
          {info.map((info) => <p key={info.name}> <strong> {info.name}: </strong> {info.value} </p> )}
        </div>
        {singleFlag 
          && <>
              <strong className='border-country-name'> Border Countries: </strong>
              {borderCountries.map(country=> <span key={country} className='border-country'> {country} </span> )}
            </>
        }
      </div>
    </div>
  )
};

Flag.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  borderCountries: PropTypes.arrayOf(PropTypes.string),
  singleFlag: PropTypes.bool,
  id: PropTypes.string.isRequired
}

export default React.memo(Flag);
