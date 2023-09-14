import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import raw from './utils/wordCatalog.txt';
import Box from './components/Box';
import Header from './components/Header';

function App() {
  const [word, setWord] = useState("");
  console.log("🚀 ~ file: App.jsx:10 ~ App ~ word:", word)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('firstVisit') !== 'true') {
      navigate('/instructions')
      localStorage.setItem('firstVisit', 'true');
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
    
    <div className='bg-white dark:bg-slate-800  text-slate-800 dark:text-white'>
      <div className='h-screen grid grid-flow-row place-items-stretch gap-8 container mx-auto'>
        <Header />
        <Box word={word} />
      </div>
      
    </div>
  )
}

export default App
