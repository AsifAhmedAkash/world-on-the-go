import React, { use, useState } from 'react';
import Country from '../Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
    }

    return (
        <div >
            <h1>in the coutries {countries.length}</h1>
            <h3>Total country visited</h3>
            <div id='countries'>
                {/* <Country></Country> */}
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;