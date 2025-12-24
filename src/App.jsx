import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Willcome from './Pages/Willcome'
import BrekFast from './Components/BrekFast'
import LunchAndDinner from './Components/LunchAndDinner'
import Drinks from './Components/Drinks'

function App() {


  return (
    <div>

      <Routes>
        <Route path='/' element={<Willcome />}></Route>
        <Route path='home' element={<HomePage />}></Route>
        <Route path='/breakfast' element={<BrekFast />}></Route>
        <Route path='/lunch' element={<LunchAndDinner />}></Route>
        <Route path='/drinks' element={<Drinks />}></Route>
      </Routes>
        
    </div>
  )
}

export default App
