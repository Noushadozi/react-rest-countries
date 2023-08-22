import React from 'react';
import './Country.css';

const Country = (props) => {
    const {flags, name, region, area, population, maps} = props.country;
    // console.log(props);
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <a href={maps.googleMaps} target="_blank" >Map</a>
        </div>
    );
};

export default Country;