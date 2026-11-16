function Carrinho({ itens, onRemover }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Carrinho ({itens.length})
      </h2>

      {itens.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <ul className="space-y-2">
          {itens.map((item) => (
            <li key={item.uid} className="flex items-center justify-between">
              <span className="text-gray-900">
                {item.nome} - R$ {item.preco.toFixed(2)}
              </span>
              <button
                onClick={() => onRemover(item.uid)}
                className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 pt-4 border-t border-gray-200 text-lg font-bold text-gray-900">
        Total: R$ {total.toFixed(2)}
      </p>
    </div>
  );
}

export default Carrinho;