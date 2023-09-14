import Timer from "./Timer";
import PropTypes from 'prop-types';

export default function Stats({ isWinner = false, isFinished = false, word = '', won = 0, lost = 0, date, onClose }) {
  return (
    <div className="bg-white dark:bg-slate-800  text-slate-800 dark:text-white gap-4 grid border border-black  dark:border-white rounded-xl py-5 px-10">
      <div className="text-2xl text-center py-4 ">Estadística</div>
      <div className="grid grid-cols-2 place-content-between place-items-stretch">
        <div className="flex flex-col text-normal text-center">
          <span className="font-bold">{lost + won}</span>
          <span>
            Jugadas
          </span>
        </div>
        <div className="flex flex-col text-normal text-center">
          <span className="font-bold">{won}</span>
          <span>
            Victorias
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 mb-4">
        <div className="flex flex-col justify-center items-center gap-1">
          {
            isFinished &&
            <div className="text-sm text-center">{isWinner ? '¡Ganaste!' : `La palabra era: ${word}`}</div>
          }
          <Timer date={date}/>
          <button className="bg-green-400  text-white font-bold rounded-md px-4 py-2" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  )
}

Stats.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onClose: PropTypes.func.isRequired
};
