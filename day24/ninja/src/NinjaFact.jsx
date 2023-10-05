import { useState, useEffect } from "react"

export const NinjaFacts = () => {
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const Facts = async () => {
        const response = await fetch('https://catfact.ninja/fact')
        const responseData = await response.json()
        setData(responseData)
        setDataLoaded(true)
    }

        useEffect(() => {
        Facts()
    }, [])

    return (
        <div>
            <h2>Ninja Facts</h2>
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