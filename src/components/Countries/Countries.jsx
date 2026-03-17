import React, { use } from 'react';
import Country from '../Country';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>in the coutries {countries.length}</h1>
            {
                countries.map(country => <Country></Country>)
            }
        </div>
    );
};

export default Countries;