import PropTypes from 'prop-types';
const qwerty = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export default function QwertyKyb ({ handleInput }) {
  return (
    <div className="flex flex-col items-center">
      {qwerty.map((row, index) => (
        <div key={index} className="flex flex-row">
          {row.map((letter, index) => (
            <button key={index} className="w-12 h-12 border border-black" onClick={() => handleInput(letter)}>{letter}</button>
          ))}
        </div>
      ))}
    </div>
  )
}

QwertyKyb.propTypes = {
  handleInput: PropTypes.func.isRequired,
};