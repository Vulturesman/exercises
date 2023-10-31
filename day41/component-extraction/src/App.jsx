import { useState } from 'react'

import './design/aperture/css/main.css'
import Header from './Header'
import Footer from './Footer'
import ProductList from './ProductList'
import Search from './Search'

function App() {

  return (
   <div id="page">

       <Header />

        <div id="main">

            <Search />

            <ProductList />

        </div>

       <Footer />

    </div>
  )
}

export default App
