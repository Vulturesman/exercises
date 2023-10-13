import React, { useState, useEffect } from 'react';
import Celebrity from './components/Celebrity';
import './App.css'

function App() {
  const [celebrities, setCelebrities] = useState([]);

  useEffect(() => {
    // not workign????
    fetch('http://www.cbp-exercises.test/day29/full-stack-celebrities/src/api/index.php')
      .then((response) => response.json())
      .then((data) => setCelebrities(data));
  }, []);

  return (
    <div className="app">
      <h1>Celebrity App</h1>
      {celebrities.map((celebrity) => (
        <Celebrity
          key={celebrity.id}
          name={celebrity.name}
          image={celebrity.image}
          profession={celebrity.profession}
          wealth={celebrity.wealth}
          bio={celebrity.bio}
          age={celebrity.age}
          sourceOfWealth={celebrity.source_of_wealth}
          residence={celebrity.residence}
          citizenship={celebrity.citizenship}
          education={celebrity.education}
          maritalStatus={celebrity.marital_status}
          children={celebrity.children}
        />
      ))}
    </div>
  );
}

export default App;