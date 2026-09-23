# Cafeteria — Minicurso de Design Patterns

Projeto para ser refatorado durante o minicurso.

O código inicial funciona, mas concentra várias responsabilidades no mesmo serviço.
A ideia é evoluí-lo em aula e discutir onde padrões de projeto passam a fazer sentido.

## Requisitos

- Node.js 20+
- npm

## Como executar

```bash
npm install
npm run dev
```

## Estrutura inicial

```text
src/
  database/
    BancoDeDados.ts
    BancoEmMemoria.ts
  model/
    ItemPedido.ts
    Pedido.ts
  service/
    PedidoService.ts
  index.ts
```

O `BancoEmMemoria` implementa a interface `BancoDeDados` e guarda os pedidos
finalizados e o histórico em estruturas em memória (`Map` e array). Os dados são perdidos ao encerrar o processo.

## Cenário

Uma cafeteria recebe pedidos de clientes comuns, estudantes e clientes VIP.

O sistema precisa:

- calcular desconto;
- calcular o total;
- escolher a forma de pagamento;
- finalizar o pedido;
- enviar uma notificação;
- registrar o que aconteceu.

Neste ponto inicial, essas decisões estão concentradas no `PedidoService`.

## Objetivo da aula

Não existe a intenção de "consertar código ruim".
O objetivo é observar como um código simples começa a ficar difícil de modificar
quando novas regras aparecem.

Durante a refatoração, o projeto pode evoluir com padrões como:

- Strategy;
- Factory;
- Observer;
- Adapter;
- Decorator.

O importante é entender **qual problema cada padrão resolve**.
