export default function SearchResults ( {searchResults} ) {

   // console.log(searchResults)

    return (
           
                <table>
                    <thead>
                        <tr>
                            <th>Result:</th>
                            <th>Link here:</th>
                        </tr>
                    </thead>

                    <tbody>
                         {searchResults.map(result => (
                        <tr key={result.pageid}>
                            <td>{result.title}</td>
                            <td> <a 
                            href={`https://en.wikipedia.org/wiki/${result.title}`}
                            target="_blank"
                            rel="noopener noreferrer">
                                Click HERE
                            </a></td>
                        </tr>
                            ))}
                    </tbody>
                </table>
                            
        )
}