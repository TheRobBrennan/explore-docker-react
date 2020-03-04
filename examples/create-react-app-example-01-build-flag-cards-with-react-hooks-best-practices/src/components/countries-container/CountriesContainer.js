import React, { useState, useEffect } from 'react';
import CountryCard from '../country-card/CountryCard';
import './CountriesContainer.css';
import { getAllCountries } from '../../services/countries';

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then(response => {
      setCountries(response);
    });
  }, []);

  return (
    <div className="countries-container">
      {countries.map(country => {
        return <CountryCard key={country.numericCode} country={country} />;
      })}
    </div>
  );
};

export default CountriesContainer;
