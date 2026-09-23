import { BancoEmMemoria } from "./database/BancoEmMemoria";
import { ItemPedido } from "./model/ItemPedido";
import { Pedido } from "./model/Pedido";
import { PedidoService } from "./service/PedidoService";

const pedido = new Pedido(
  "Ana",
  "ESTUDANTE",
  "PIX",
  [
    new ItemPedido("Cappuccino", 12, 1),
    new ItemPedido("Pão de queijo", 6, 2)
  ]
);

const banco = new BancoEmMemoria();
const pedidoService = new PedidoService(banco);

pedidoService.finalizar(pedido);

console.log("\n=== BANCO EM MEMÓRIA ===");
console.log(banco.listarPedidos());
console.log(banco.listarHistorico());
