
import PropTypes from 'prop-types';

export default function LetterBox ({ letter, color}) {
  return (
    <div className={`${color && `bg-${color}-400`} w-12 h-12 border border-black flex justify-center items-center`}>
      {letter}
    </div>
  );
}

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.string
};