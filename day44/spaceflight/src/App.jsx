import './App.css'
import Homepage from './components/Homepage'
import ArticleDetails from './components/ArticleDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
