import { useEffect, useState } from "react";

export default function Joke() {

  const [joke, setJoke] = useState('');
    const [showSetup, setShowSetup] = useState(false);

  const loadJoke = async () => {

    const response = await fetch('https://v2.jokeapi.dev/joke/Any')
    const data = await response.json()


      console.log(data)
      setJoke(data)
      setShowSetup(false);

      if (data.type === 'twopart') {
        setTimeout(() => setShowSetup(true), 3000);
      }
  }

  useEffect( () => {
    loadJoke()
  }, [])

    return (
        <>
            <h3>
                {joke ? (joke.type === 'twopart' ? joke.setup : joke.joke) : "Loading..."}
            </h3>

                {joke && joke.type === 'twopart' && showSetup && ( <h4>{joke.delivery}</h4> )}

            <button onClick={loadJoke}>NEW JOKE</button>
        </>
    )
}