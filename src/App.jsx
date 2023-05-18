import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h2>header</h2>
      <Outlet></Outlet>
      <h2>footer</h2>
    </>
  )
}

export default App
