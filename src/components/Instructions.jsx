import { useNavigate } from "react-router-dom";

export default function Instructions () {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-evenly">
      <div>
        <h1 className="text-4xl font-bold text-white">Cómo jugar</h1>
      </div>
      <div className="flex flex-col">
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
        <span>La letra <span className="font-bold">G</span> está en la palabra y en la posición correcta.</span>
        <span>La letra <span className="font-bold">C</span> está en la palabra pero en la posición incorrecta.</span>
        <span>La letra <span className="font-bold">O</span> no está en la palabra.</span>
      </div>
      <div>
        <span>Puede haber letras repetidas. Las pistas son independientes para cada letra.</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <span>¡Una palabra nueva cada 5 minutos!</span>
        <button className="bg-green-400  text-black rounded-md px-4 py-2" onClick={() => navigate('/')}>¡Jugar!</button>
      </div>
    </div>
  )
}