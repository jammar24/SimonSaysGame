import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import SimonSaysGame from './pages/SimonSaysGame'

function App() {


  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>

      <Route element={<ProtectedRoutes/>}>
      <Route path='/Simon' element={<SimonSaysGame/>}/>
      </Route>

     </Routes>
    </div>
  )
}

export default App
