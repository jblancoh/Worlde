import { useEffect, useState } from 'react'
import { redirect, Link } from "react-router-dom";
import raw from './utils/wordCatalog.txt';
import './App.css'
import Box from './components/Box';

function App() {
  const [word, setWord] = useState("");
  
  useEffect(() => {
    if (!localStorage.getItem('firstVisit')) {
      // Mostrar modal de instrucciones
      localStorage.setItem('firstVisit', 'true');
    } else {
      redirect('/instructions')
    }
  }, []);
  
  useEffect(() => {    
    const fetchRandomWord = () => {
      fetch(raw)
        .then((response) => response.text())
        .then((data) => {
          const array = data.split('\n').filter(word => word.length === 5);
          const randomWord = (array[Math.floor(Math.random() * array.length)]).toUpperCase();

          const accents = 'ÁÉÍÓÚ';
          const accentsOut = 'AEIOU';
          const wordWithoutAccents = randomWord.split('').map(letter => {
            const accentIndex = accents.indexOf(letter);
            return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
          }).join('');          
          setWord(wordWithoutAccents);
        })
        .catch((error) => {
          console.error('Error al obtener el archivo:', error);
        });
    };
    
    fetchRandomWord();
    
    const interval = setInterval(() => {
      fetchRandomWord();
    }, 300000);

    return () => clearInterval(interval);
   
  }, []);
  
 
  return (
    <>
      <Box word={word} />
      <Link to="/instructions">Ir a instrucciones</Link>
    </>
  )
}

export default App
