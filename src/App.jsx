import { useState } from 'react';
import Contador from './components/Contador';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Checkout from './components/Checkout';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    // spread operator: cria um novo array, sem mutar o estado
    setCarrinho([...carrinho, { ...produto, uid: crypto.randomUUID() }]);
  }

  function remover(uid) {
    // filter também devolve um novo array
    setCarrinho(carrinho.filter((item) => item.uid !== uid));
  }

  function finalizar() {
    setCarrinho([]);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Loja com useState
        </h1>

        <Contador />
        <Produtos onAdicionar={adicionar} />
        <Carrinho itens={carrinho} onRemover={remover} />
        <Checkout
          onFinalizar={finalizar}
          desabilitado={carrinho.length === 0}
        />
      </div>
    </main>
  );
}

export default App;