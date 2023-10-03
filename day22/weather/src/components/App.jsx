import { useState } from 'react'

import './App.css'
import { WeeklyForecast } from './WeeklyForecast'

function App() {

  return (
     <div className="container">
          <h1>Weekly Weather Forecast</h1>
         <WeeklyForecast/>
      </div>
  )
}

export default App
