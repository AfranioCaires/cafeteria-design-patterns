import { BancoDeDados, PedidoRegistro } from "../database/BancoDeDados";
import { Pedido } from "../model/Pedido";

export class PedidoService {
  constructor(private readonly banco: BancoDeDados) {}

  finalizar(pedido: Pedido): PedidoRegistro {
    const subtotal = pedido.calcularSubtotal();

    let percentualDesconto = 0;

    if (pedido.tipoCliente === "ESTUDANTE") {
      percentualDesconto = 0.1;
    }

    if (pedido.tipoCliente === "VIP") {
      percentualDesconto = 0.2;
    }

    const desconto = Math.round(subtotal * percentualDesconto * 100) / 100;
    const total = subtotal - desconto;

    console.log("=== PEDIDO ===");
    console.log(`Cliente: ${pedido.cliente}`);
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);

    if (pedido.formaPagamento === "PIX") {
      console.log(`Pagamento via PIX no valor de R$ ${total.toFixed(2)}`);
    }

    if (pedido.formaPagamento === "CARTAO") {
      console.log(`Pagamento via cartão no valor de R$ ${total.toFixed(2)}`);
    }

    if (pedido.formaPagamento === "DINHEIRO") {
      console.log(`Pagamento em dinheiro no valor de R$ ${total.toFixed(2)}`);
    }

    const registro = this.banco.salvarPedido({
      cliente: pedido.cliente,
      tipoCliente: pedido.tipoCliente,
      formaPagamento: pedido.formaPagamento,
      subtotal,
      desconto,
      total,
      status: "FINALIZADO"
    });

    console.log(`E-mail enviado para ${pedido.cliente}`);

    this.banco.registrarHistorico(registro.id, "Pedido finalizado");
    console.log(`Pedido #${registro.id} registrado no histórico`);
    console.log("Pedido finalizado com sucesso");

    return registro;
  }
}
