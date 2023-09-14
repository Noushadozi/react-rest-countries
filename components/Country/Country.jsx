import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, showVisitedCountries }) => {
    const { flags, name, region, area, population, maps } = country;
    const [visitedCountry, setVisitedCountry] = useState(false);
    const handleVisitingCountry = (country) => {
        setVisitedCountry(true);
        showVisitedCountries(country);
    }
    return (
        <div className={`country ${visitedCountry && 'visited-country'}`}>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <a href={maps.googleMaps} target="_blank" >Map</a>
            {
                visitedCountry || <button onClick={() => handleVisitingCountry(country)}>Visited</button>
            }
            {
                visitedCountry && <p>I have visited the country 🥳 </p>
            }
        </div>
    );
};

export default Country;