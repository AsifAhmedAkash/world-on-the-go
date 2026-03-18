import React, { use, useState } from 'react';
import Country from '../Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        // console.log('flag need to be added', flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div >
            <h1>in the coutries {countries.length}</h1>
            <h3>Total country visited {visitedCountries.length}</h3>
            <h4>total visted flags {visitedFlags.length}</h4>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="" />)
                }
            </div>
            <div id='countries'>
                {/* <Country></Country> */}
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;