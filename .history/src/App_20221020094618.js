import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom"
import Landingpage from './screens/Landingpage/Landingpage';
import Summer from '.'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/sales' element={<Summer/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/accessries' element={<Accessories/>} />
          <Route path='/summer' element={<Summer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
