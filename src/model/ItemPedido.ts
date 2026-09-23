export class ItemPedido {
  constructor(
    public readonly nome: string,
    public readonly preco: number,
    public readonly quantidade: number
  ) {}

  calcularSubtotal(): number {
    return this.preco * this.quantidade;
  }
}
