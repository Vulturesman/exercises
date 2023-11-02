import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([])

  const [offset, setOffset] = useState(0);

  const loadWiki = async () => {
    if (!searchQuery) return
    const response = await fetch (`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`)
    const data = await response.json()

    setSearchResults(data.query.search)
   // console.log(searchResults)
  }


  useEffect( () => {
    loadWiki()
  }, [searchQuery, offset])
  

  return (
    <>
        <SearchBar setSearchQuery={setSearchQuery}/>

        {searchQuery && <SearchResults searchResults={searchResults} /> }

        {searchQuery &&
        <>
          <button onClick={() => setOffset(Math.max(offset - 10, 0))}>Prev</button>
          <button onClick={() => setOffset(offset + 10)}>Next</button>
        </>
        }
    </>
  )
}

export default App
