import React from "react";
import PropTypes from 'prop-types'
import "./styles.css";

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const handleReset = () => setSearch("")
  
  const handleSubmit = (e) =>  e.preventDefault();

  return (
    <form onSubmit={handleSubmit} className="form-search d-flex justify-content-between">
      <label htmlFor="country-search" className="form-search__label">
        <i className="fas fa-search"></i>
      </label>
      <input
        type="text"
        id="country-search"
        value={search}
        onChange={handleSearch}
        placeholder="Search for a country..."
        className="form-search__input"
      />

      {search.length >= 1 && (
        <button className="form-search__reset" onClick={handleReset} >
          <i className="fas fa-times"></i>
        </button>
      )}
    </form>
  );
};


Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
}

export default Search;
