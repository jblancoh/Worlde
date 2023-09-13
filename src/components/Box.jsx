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
  const [finished, setFinished] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [won, setWon] = useState(Number(localStorage.getItem('won')));
  const [lost, setLost] = useState(Number(localStorage.getItem('lost')));
  
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
        newColorArray.push('bg-green-400');
       
      } else if (word.includes(rows[attempts].inputWord[i])) {
        newColorArray.push('bg-yellow-400');
      } else {
        newColorArray.push('bg-gray-400');
      }
    }
    if (rows[attempts].inputWord === word) {
      setFinished(true)
      localStorage.setItem('won', won + 1);
      return setIsWinner(true);
    }
    const newRow = { ...rows[attempts], colorArray: newColorArray };
    const newRows = [...rows];
    newRows[attempts] = newRow;
    setRows(newRows);
    if (attempts >= 4) {
      setFinished(true)
      localStorage.setItem('lost', lost + 1);
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
    <div className="flex flex-col justify-between gap-8">
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
      {isWinner && <div className="text-2xl text-center"> You are the winner! {word}</div>}
    </div>
  );
}

Box.propTypes = {
  word: PropTypes.string.isRequired,
};