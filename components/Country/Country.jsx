import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div>
            <img src={props.flags} alt="" />
            <h3>{props.name}</h3>
            <p>Region: {props.region}</p>
            <p>Area: {props.area}</p>
            <a href={props.maps} target="_blank" >map</a>
            <p>Population: {props.population}</p>
            {/* {
                props.capitals.map(capital => <p>capital</p>)
            } */}
        </div>
    );
};

export default Country;