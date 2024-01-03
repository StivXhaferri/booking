import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route   path='/' exact element={<Landing/>} />
        <Route   path='/signin' element={<Signin/>} />
        <Route   path='/signup'  element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App