import Timer from "./Timer";
import PropTypes from 'prop-types';

export default function Stats({ isWinner = false, isFinished = false, word = '', won = 0, lost = 0, date}) {
  return (
    <>
      <div className="text-2xl text-center">Estadística</div>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="text-2xl text-center"> Won: {won} </div>
          <div className="text-2xl text-center"> Lost: {lost} </div>
          {
            isFinished &&
              <div className="text-2xl text-center">{isWinner ? 'Ganaste!' : `La palabra era: ${word}`}</div>
          }
          <Timer date={date}/>
        </div>
      </div>
    </>
  )
}

Stats.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
