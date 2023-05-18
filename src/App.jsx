import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Shared/Navbar/Navbar'
import Footer from './Pages/Shared/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
