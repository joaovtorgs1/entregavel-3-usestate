# Entregável 3 - Interatividade e useState

App interativa de carrinho de compras feita com React, useState e Tailwind CSS.

## Funcionalidades

- Contador simples com useState (Parte 1)
- Lista de produtos com botão de adicionar e feedback visual (Parte 2)
- Carrinho com remoção de itens e cálculo do total (Parte 2)
- Formulário de checkout com validação do nome (Parte 3)

## Como rodar

    npm install
    npm run dev

## Reflexão

**Por que não devemos mutar o estado diretamente (ex: carrinho.push(item)) e qual a importância do spread operator ([...carrinho, item]) no React?**

O React decide se precisa re-renderizar um componente comparando o valor anterior do estado com o novo. Quando uso carrinho.push(item), altero o mesmo array que já estava na memória, então a referência continua igual. O React acha que nada mudou e a tela não é atualizada, além de poder causar bugs difíceis de achar.

Com o spread operator, [...carrinho, item], crio um array novo com os itens antigos mais o novo. Como a referência é diferente, o React percebe a mudança e re-renderiza. Por isso o estado deve ser tratado como imutável: nunca alterar o original, sempre criar uma cópia e passá-la para a função atualizadora (setCarrinho). O mesmo vale para remover itens, onde uso filter, que também devolve um novo array.