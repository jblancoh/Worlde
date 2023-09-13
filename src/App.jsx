import { useEffect } from 'react'
import { redirect, Link } from "react-router-dom";
import './App.css'

function App() {
  
  useEffect(() => {
    if (!localStorage.getItem('firstVisit')) {
      // Mostrar modal de instrucciones
      localStorage.setItem('firstVisit', 'true');
    } else {
      redirect('/instructions')
    }
  }, []);
  return (
    <>
      <h1>
        Hola mundo
      </h1>
      <Link to="/instructions">Ir a instrucciones</Link>
    </>
  )
}

export default App
