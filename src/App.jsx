import { useEffect, useState, useCallback } from 'react'
import raw from './utils/wordCatalog.txt';
import Box from './components/Box';

const TIME_TO_RESET = 300000;

function App() {
  const [word, setWord] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    fetchRandomWord();
    
    const wordInterval = setInterval(() => {
      setIsReset(false)
      fetchRandomWord();
    }, TIME_TO_RESET);

    return () => {
      clearInterval(wordInterval);
    }
   
  }, [isReset]);
  
  const fetchRandomWord = useCallback(() => {
    return fetch(raw)
      .then((response) => response.text())
      .then((data) => {
        const array = data.split('\n').filter(word => word.length === 5);
        const randomWord = (array[Math.floor(Math.random() * array.length)]).toUpperCase();
        setIsReset(true)
        const accents = 'ÁÉÍÓÚ';
        const accentsOut = 'AEIOU';
        const wordWithoutAccents = randomWord.split('').map(letter => {
          const accentIndex = accents.indexOf(letter);
          return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
        }).join('');
        setDate(new Date(new Date().getTime() + TIME_TO_RESET));
        setWord(wordWithoutAccents);
      })
      .catch((error) => {
        console.error('Error al obtener el archivo:', error);
      });
  }, [])
  
  return (
    <div className='bg-white dark:bg-slate-800  text-slate-800 dark:text-white'>
      <Box word={word} isReset={isReset} fetchRandomWord={fetchRandomWord} date={date}/>
    </div>
  )
}

export default App
