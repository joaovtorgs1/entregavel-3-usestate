import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contador</h2>
      <p className="text-3xl font-bold text-center mb-4">{contador}</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setContador(contador - 1)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium"
        >
          -1
        </button>
        <button
          onClick={() => setContador(0)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-medium"
        >
          Zerar
        </button>
        <button
          onClick={() => setContador(contador + 1)}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default Contador;