import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Shared/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h2>footer</h2>
    </>
  )
}

export default App
