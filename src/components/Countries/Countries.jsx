import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';
import { addToLs, getFromLs } from '../../utilities/localStorage';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const addVisitedCountries = (country) => {
        addToLs(country.cca3);
    }
    useEffect(() => {
        if (countries.length) {
            console.log(countries);
            const visitedCountriesFromLs = getFromLs();
            let savedCountries = [];
            for (const country of visitedCountriesFromLs) {
                console.log(country);
                const visitedCountry = countries.find(allCountry => allCountry.cca3 === country);
                if (visitedCountry) {
                    savedCountries.push(visitedCountry);
                }
            }
            setVisitedCountries(savedCountries);
        }
    }, [countries])
    const showVisitedCountries = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }

    return (
        <div>
            <h1>Welcome To React Rest Countries</h1>
            <h2 className='number-of-countries'>{countries.length} countries are listed here</h2>
            <div className='visited-container'>
                {
                    visitedCountries.map(visitedCountry => <div>
                        <p className='visited-title'>{visitedCountry.name.common}</p>
                        <img className='visited-img' src={visitedCountry.flags.png} alt="" />
                    </div>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            addVisitedCountries={addVisitedCountries}
                            showVisitedCountries={showVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;