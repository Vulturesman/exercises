import { useEffect, useState } from "react"
import "./index.css"

export default function Country () {

    const [countries, setCountries] = useState([])

    const loadCountries = async () => {
        // change the last fields for what is needed
        const url = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags'
        const response = await fetch(url)
        const data = await response.json()

        setCountries(data)
        console.log(countries)
    }

    useEffect( () => {
        loadCountries()
    }, [])

    return (
        <>
            <div className="container">

                { countries.map((country) => (
                    <div className="country-card" key={country.name.common}>
                        <img src={country.flags.png} alt={country.flags.alt} />
                        <div className="country-details">
                            <div className="country-name">{country.name.common}</div>
                            <div className="country-info"><strong>Capital: </strong>{country.capital[0]}</div>
                            <div className="country-info"><strong>Region: </strong>{country.region}</div>
                            <div className="country-info"><strong>Population: </strong>{country.population.toLocaleString()}</div>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}