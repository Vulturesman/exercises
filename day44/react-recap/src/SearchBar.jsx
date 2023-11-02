import { useState } from "react"

export default function SearchBar() {

    const [search, setSearch] = useState('')

    return(
        <div className="search-container">
            <form 
                className="search-form"
                onSubmit={ev => {
                    ev.preventDefault();
            }}
            >

                <input
                    type="text"
                    value={search}
                    placeholder="Seach for a country..."
                    onChange={(ev) => setSearch(ev.target.value)}
                />

                <button>Search!</button>

            </form>
        </div>
    )
}