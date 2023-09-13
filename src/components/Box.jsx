import { useState } from "react";
import PropTypes from 'prop-types';

import LetterBox from "./LetterBox";
import QwertyKyb from "./QuertyKYB";
import { useEffect } from "react";

export default function Box({ word }) {
  const initialRows = Array(5).fill({ inputWord: '_____', colorArray: [] });
  const [rows, setRows] = useState(initialRows);
  const [position, setPosition] = useState(0);
  const [attempts, setAttempts] = useState(0); 
  
  const handleInput = (letter) => {
    if (position < 5) {
      const newRow = { ...rows[attempts] };
      const newWordArray = newRow.inputWord.split('');
      newWordArray[position] = letter;
      newRow.inputWord = newWordArray.join('');
      const newRows = [...rows];
      newRows[attempts] = newRow;
      setRows(newRows);
      setPosition(position + 1);
    }
  };
  
  const compareWords = () => {
    let newColorArray = [];
    for (let i = 0; i < 5; i++) {
      if (rows[attempts].inputWord[i] === word[i]) {
        newColorArray.push('green');
      } else if (word.includes(rows[attempts].inputWord[i])) {
        newColorArray.push('yellow');
      } else {
        newColorArray.push('gray');
      }
    }
    const newRow = { ...rows[attempts], colorArray: newColorArray };
    const newRows = [...rows];
    newRows[attempts] = newRow;
    setRows(newRows);
    if (attempts >= 4) {
      // Mostrar modal de estadísticas y reiniciar
      
      // ...
    } else {
      setAttempts(attempts + 1);
     
      setPosition(0);
    }
  };
  
  useEffect(() => {
    if (position === 5) {
      compareWords();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);
  
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-col justify-center">
        {rows.map((row, index) => (
          <div key={index} className="flex flex-row justify-center">
            {row.inputWord.split("").map((letter, i) => (
              <LetterBox key={i} letter={letter !== '_' ? letter : ''} color={row.colorArray[i]} />
            ))}
          </div>
        ))}
      </div>
      <QwertyKyb handleInput={handleInput} />
    </div>
  );
}

Box.propTypes = {
  word: PropTypes.string.isRequired,
};