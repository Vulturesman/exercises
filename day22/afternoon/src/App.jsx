import { useEffect, useState} from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    console.log('useEffect function');
    // fetch 
    /* the brackets down are for second parameter (for example [name], it will be rerender all the time name is active */

  }, [])


  return (
    <>
     <label>name:</label>
     <input value={name} onChange={(e) => setName(e.target.value)} />
     <br />
     <label>age:</label>
     <input value={age} onChange={(e) => setAge(e.target.value)}/>
     <br />
     <button onClick={(e) => console.log(`name is: ${name} and the age is: ${age}`)}>OK</button>
     <h1>My name is {name} and I am {age} years old.</h1>
    </>
  )
}

export default App
