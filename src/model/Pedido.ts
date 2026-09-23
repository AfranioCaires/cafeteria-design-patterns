import { ItemPedido } from "./ItemPedido";

export type TipoCliente = "COMUM" | "ESTUDANTE" | "VIP";
export type FormaPagamento = "PIX" | "CARTAO" | "DINHEIRO";

export class Pedido {
  constructor(
    public readonly cliente: string,
    public readonly tipoCliente: TipoCliente,
    public readonly formaPagamento: FormaPagamento,
    public readonly itens: ItemPedido[]
  ) {}

  calcularSubtotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0
    );
  }
}
