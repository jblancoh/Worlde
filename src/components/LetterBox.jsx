
import PropTypes from 'prop-types';

export default function LetterBox({ letter, color, className = "" }) {
  return (
    <div className={`${color || 'bg-gray-200'} w-12 h-12 rounded-md flex justify-center items-center mb-1  ${className}`}>
      {letter}
    </div>
  );
}

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};