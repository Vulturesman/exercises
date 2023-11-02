import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([])

  const loadWiki = async () => {
    if (!searchQuery) return
    const response = await fetch (`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`)
    const data = await response.json()

    
    setSearchResults(data.query.search)
    
    
    console.log(searchResults)
  }


  useEffect( () => {
    loadWiki()
  }, [searchQuery])
  

  return (
    <>
       
      <SearchBar setSearchQuery={setSearchQuery}/>

    {searchQuery &&
      <SearchResults searchResults={searchResults} /> }
    </>
  )
}

export default App
