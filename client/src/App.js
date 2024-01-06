import React, {useState , useEffect} from 'react'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Feed from './pages/Dashboard/pages/Feed'
import axios from 'axios'



const App = () => {


  const [auth , setAuth] = useState();


  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    async function checkRoutes() {
      try{
        const res = await axios.get('http://localhost:8000/api/dash/dashboard' , {headers});
        console.log(res.status);
      }catch(error){
        console.log(error)
      }
    }
    checkRoutes()
  }, [])




  return (
    <div>
      <Routes>
        <Route   path='/' exact element={<Landing/>} />
        <Route   path='/signin' element={<Signin/>} />
        <Route   path='/signup'  element={<Signup/>} />
        <Route   path="/dashboard/feed" element={<Feed/>} />
      </Routes>
    </div>
  )
}

export default App