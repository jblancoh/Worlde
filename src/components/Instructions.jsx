import LetterBox from "./LetterBox";
import PropTypes from 'prop-types';

export default function Instructions({ onClose }) {
  return (
    <div className="bg-white dark:bg-slate-800  text-slate-800 dark:text-white">
      <div className="h-screen flex flex-col justify-evenly container mx-auto items-center">
        <div>
          <h1 className="text-4xl font-bold">Cómo jugar</h1>
        </div>
        <div className="flex flex-col justify-center mx-9">
          <span>
            Adivina la palabra oculta en cinco intentos
          </span>
          <span>
            Cada intento debe ser una palabra válida de 5 letras
          </span>
          <span>
          Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar a la palabra.
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Ejemplos:</span>
          <div className="grid grid-rows-2">
            <div className="flex items-center">
              <span>La letra <span className="font-bold">G</span> está en la palabra y en la posición correcta.</span>
            </div>
            <div className="flex flex-row justify-center gap-1 font-bold">
              <LetterBox letter="G" color="bg-green-400" className="border border-black dark:text-slate-800"/>
              <LetterBox letter="A" color="bg-white" className="border border-black dark:text-slate-800"/>
              <LetterBox letter="T" color="bg-white" className="border border-black dark:text-slate-800"/>
              <LetterBox letter="O" color="bg-white" className="border border-black dark:text-slate-800"/>
              <LetterBox letter="S" color="bg-white" className="border border-black dark:text-slate-800"/>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="flex items-center">
              <span>La letra <span className="font-bold">C</span> está en la palabra pero en la posición incorrecta.</span>
            </div>
            <div className="flex flex-row justify-center gap-1 font-bold">
              <LetterBox letter="V" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="O" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="C" color="bg-yellow-400" className="border border-black dark:text-slate-800" />
              <LetterBox letter="A" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="L" color="bg-white" className="border border-black dark:text-slate-800" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="flex items-center">
              <span>La letra <span className="font-bold">O</span> no está en la palabra.</span>
            </div>
            <div className="flex flex-row justify-center gap-1 font-bold">
              <LetterBox letter="C" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="A" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="N" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="T" color="bg-white" className="border border-black dark:text-slate-800" />
              <LetterBox letter="O" color="bg-gray-400" className="border border-black dark:text-slate-800" />
            </div>
          </div>
        </div>
        <div>
          <span>Puede haber letras repetidas. Las pistas son independientes para cada letra.</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <span>¡Una palabra nueva cada 5 minutos!</span>
          <button className="bg-green-400  text-white font-bold rounded-md px-4 py-2" onClick={onClose}>¡Jugar!</button>
        </div>
      </div>
    </div>
  )
}

Instructions.propTypes = {
  onClose: PropTypes.func.isRequired,
}