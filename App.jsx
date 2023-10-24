import React from 'react'
import Navbar from './Navbar'
import GetAllPeople from './GetAllPeople'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import AddPeople from './AddPeople'

const App = () => {
  return (

   <section>
    <div className='App'>
      <Router>
        <Navbar/>
          <Routes>
              <Route  exact path="/addpeople" element={<AddPeople/>}/>
              <Route  exact path="/getallpeople" element={<GetAllPeople/>}/>
          </Routes>
       </Router>
    </div>
  </section>
  )
}

export default App
