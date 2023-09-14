import PropTypes from 'prop-types';
import { useEffect } from 'react';
const qwerty = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export default function QwertyKyb({ handleInput, disabled }) {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (disabled) return;
      const key = e.key.toUpperCase();
      if (qwerty.flat().includes(key)) {
        handleInput(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleInput]);
  
  return (
    <div className="flex flex-col items-center mx-auto p-10 bg-gray-200 gap-3">
      {qwerty.map((row, index) => (
        <div key={index} className="flex flex-row gap-2">
          {row.map((letter, index) => (
            <button disabled={disabled} key={index} className="w-12 h-12 bg-gray-300 rounded-md text-black" onClick={() => handleInput(letter)}>{letter}</button>
          ))}
        </div>
      ))}
    </div>
  )
}

QwertyKyb.propTypes = {
  handleInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};