import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flags} alt="" />
            <h3>{props.name}</h3>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p>
            <p>Population: {props.population}</p>
            <a href={props.maps} target="_blank" >Map</a>
        </div>
    );
};

export default Country;