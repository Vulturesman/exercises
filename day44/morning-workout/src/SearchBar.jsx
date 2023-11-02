import { useState } from "react"

export default function SearchBar ( {setSearchQuery} ) {

    const [input, setInput] = useState('')

    const handleSearch = () => {
        setSearchQuery(input)
    }

    return (
        <>  <label htmlFor="search">What you wanna Search? </label>

            <input 
            type="text"
            id="search"
            value={input}
            onChange={ev => setInput(ev.target.value)} 
            />

            <button onClick={handleSearch}>Search</button>

        </>
        
    )
}