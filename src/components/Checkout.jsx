import { useState } from 'react';

function Checkout({ onFinalizar, desabilitado }) {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (nome.trim() === '') {
      setErro('O nome é obrigatório.');
      setSucesso(false);
      return;
    }

    setErro('');
    setSucesso(true);
    setNome('');
    onFinalizar();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Checkout</h2>

      <label className="block">
        <span className="block mb-1 text-sm font-medium text-gray-700">
          Nome
        </span>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            erro
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
        />
      </label>

      {erro && <p className="mt-1 text-sm text-red-600">{erro}</p>}

      <button
        type="submit"
        disabled={desabilitado}
        className="mt-4 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Finalizar compra
      </button>

      {sucesso && (
        <p className="mt-3 p-3 rounded-lg bg-green-100 text-green-800">
          Compra finalizada com sucesso!
        </p>
      )}
    </form>
  );
}

export default Checkout;