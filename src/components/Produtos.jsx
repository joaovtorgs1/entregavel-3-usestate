import { useState } from 'react';

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 49.9 },
  { id: 2, nome: 'Tênis', preco: 199.9 },
  { id: 3, nome: 'Boné', preco: 29.9 },
  { id: 4, nome: 'Mochila', preco: 89.9 },
];

function Produtos({ onAdicionar }) {
  const [adicionadoId, setAdicionadoId] = useState(null);

  function handleAdicionar(produto) {
    onAdicionar(produto);
    setAdicionadoId(produto.id);
    setTimeout(() => setAdicionadoId(null), 1000);
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Produtos</h2>
      <ul className="space-y-3">
        {produtos.map((produto) => (
          <li key={produto.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{produto.nome}</p>
              <p className="text-sm text-gray-600">
                R$ {produto.preco.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => handleAdicionar(produto)}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                adicionadoId === produto.id
                  ? 'bg-green-600'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {adicionadoId === produto.id ? 'Adicionado ✓' : 'Adicionar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;