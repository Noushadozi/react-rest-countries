import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Welcome To React Rest Countries</h1>
            <h2>{countries.length} countries are listed here</h2>
            {
                countries.map(country =>
                    <Country
                        flags={country.flags.png}
                        name={country.name.common}
                        region={country.region}
                        area={country.area}
                        population={country.population}
                        maps={country.maps.googleMaps}
                        // capitals={props.capital}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;