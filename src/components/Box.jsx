import { useState } from "react";
import PropTypes from 'prop-types';
import Stats from "./Stats";
import Instructions from "./Instructions";
import LetterBox from "./LetterBox";
import QwertyKyb from "./QuertyKYB";
import { useEffect } from "react";
import Modal from "./Modal";
import Header from "./Header";

export default function Box({ word, isReset, fetchRandomWord, date}) {
  const initialRows = Array(5).fill({ inputWord: '_____', colorArray: [] });
  const [rows, setRows] = useState(initialRows);
  const [position, setPosition] = useState(0);
  const [attempts, setAttempts] = useState(0); 
  const [openModal, setOpenModal] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [won, setWon] = useState(Number(localStorage.getItem('won')));
  const [lost, setLost] = useState(Number(localStorage.getItem('lost')));
  const [isFinished, setIsFinished] = useState(false);
  const [openInstructionModal, setOpenInstructionModal] = useState(false);
  
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
      setOpenModal(true)
      localStorage.setItem('won', won + 1);
      setWon(won + 1);
      fetchRandomWord();
      setIsFinished(true);
      return setIsWinner(true);
    }
    const newRow = { ...rows[attempts], colorArray: newColorArray };
    const newRows = [...rows];
    newRows[attempts] = newRow;
    setRows(newRows);
    if (attempts >= 4) {
      setOpenModal(true)
      localStorage.setItem('lost', lost + 1);
      setLost(lost + 1);
      setIsFinished(true);
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
  
  useEffect(() => {
    if (isReset) {
      handleReset()
      setIsFinished(false);
    }
  }, [isReset]);
  
  const handleReset = () => {
    setRows(initialRows);
    setPosition(0);
    setAttempts(0);
    setIsWinner(false);
  };
  
  const onCloseModal = () => {
    setOpenModal(false);
    if(isFinished && isWinner) {
      handleReset();
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem('firstVisit') !== 'true') {
      setOpenInstructionModal(true);
      localStorage.setItem('firstVisit', 'true');
    }
  }, []);

  return (
    <div className='h-screen grid grid-flow-row place-items-stretch gap-8 container mx-auto'>
      <Header 
        onStatsClick={setOpenModal}
        onInstructionsClick={setOpenInstructionModal}
      />
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col justify-center">
          {rows.map((row, index) => (
            <div key={index} className="flex flex-row justify-center gap-1">
              {row.inputWord.split("").map((letter, i) => (
                <LetterBox key={i} letter={letter !== '_' ? letter : ''} color={row.colorArray[i]} className="text-black font-bold"/>
              ))}
            </div>
          ))}
        </div>
        {!word && <div className="text-2xl text-center">Esperando la siguiente palabra</div>}
        <QwertyKyb handleInput={handleInput} disabled={!word}/>
        <Modal
          open={openModal}
          onClose={onCloseModal}
        >
          {
            openModal &&
              <Stats 
                isWinner={isWinner}
                isFinished={isFinished}
                word={word}
                won={won}
                lost={lost} 
                date={date}
                onClose={onCloseModal}
              />
          }
        </Modal>
        <Modal
          open={openInstructionModal}
          onClose={() => setOpenInstructionModal(false)}
        >
          <Instructions onClose={() => setOpenInstructionModal(false)}/>
        </Modal>
      </div>
    </div>
  );
}

Box.propTypes = {
  word: PropTypes.string.isRequired,
  isReset: PropTypes.bool,
  fetchRandomWord: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date),
};