import React, { useState } from 'react';
import './Country/Country.css';


const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.name.common);
    // console.log(country.flags.flags);
    // console.log(country.population.population)
    // console.log(country.area.area);
    // console.log(handleVisitedCountries);
    const handleVisited = () => {
        console.log("btn clicked")
        if (!visited) {
            setVisited(true);
        } else {
            setVisited(false)
        }

        handleVisitedCountries(country);

    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>name: {country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "big country" : "small"}</p>

            <button onClick={handleVisited}>{
                visited ? "Visited" : "not visited"}</button>
            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Add visited flag</button>
        </div>
    );
};

export default Country;