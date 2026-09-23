import { FormaPagamento, TipoCliente } from "../model/Pedido";

export type StatusPedido = "FINALIZADO";

export interface PedidoRegistro {
  id: number;
  cliente: string;
  tipoCliente: TipoCliente;
  formaPagamento: FormaPagamento;
  subtotal: number;
  desconto: number;
  total: number;
  status: StatusPedido;
  criadoEm: Date;
}

export interface RegistroHistorico {
  pedidoId: number;
  mensagem: string;
  data: Date;
}

export interface BancoDeDados {
  salvarPedido(dados: Omit<PedidoRegistro, "id" | "criadoEm">): PedidoRegistro;
  buscarPedido(id: number): PedidoRegistro | undefined;
  listarPedidos(): PedidoRegistro[];
  registrarHistorico(pedidoId: number, mensagem: string): void;
  listarHistorico(pedidoId?: number): RegistroHistorico[];
}
