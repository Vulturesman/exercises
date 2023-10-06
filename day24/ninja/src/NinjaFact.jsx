import { useState, useEffect } from "react"

export const NinjaFacts = () => {
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const Facts = async () => {
        const response = await fetch('http://www.cbp-exercises.test/day25/morning-workout/')
        const responseData = await response.json()
        setData(responseData)
        setDataLoaded(true)
    }

        useEffect(() => {
        Facts()
    }, [])

    return (
        <div>
            <h2>Morning API</h2>
            {!dataLoaded ?
                <h3>Loading...</h3> :
                <div>
                    <p>{data.fact}</p>
                     <p><em>Very useless info, but this fact is {data.length} characters length.</em></p>
                      </div>
            }
        </div>
    )
}


/* solution:

import { useEffect, useState } from 'react'
import './App.scss'
import catIcon from './assets/cat-black-face.svg';

function App() {

    const [loading, setLoading] = useState(true)
    const [fact, setFact] = useState(null);

    const loadFact = async () => {

        setLoading(true);

        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();

        setLoading(false);
        setFact(data);
    }

    const handleReloadButtonClicked = ev => {
        ev.preventDefault();

        loadFact();
    }

    useEffect(() => {
        loadFact();
    }, [])

    return (
        <>
            <h1>Cat fact app</h1>

            <div className="cat-fact">
                {
                    loading
                        ? <div className="cat-fact__loading">
                            <img src={ catIcon } alt="Cat icon" />
                        </div>
                        : ''
                }

                {
                    (!loading && fact)
                        ? (
                            <p className="cat-fact__text">
                                { fact.fact }
                            </p>
                        )
                        : ''
                }
            </div>

            <div className="cat-fact__buttons">
                <button
                    className="cat-fact__reload"
                    onClick={ handleReloadButtonClicked }
                >
                    Load another
                </button>
            </div>
        </>
    )
}

export default App


*/