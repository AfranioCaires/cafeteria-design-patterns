import {
  BancoDeDados,
  PedidoRegistro,
  RegistroHistorico
} from "./BancoDeDados";

export class BancoEmMemoria implements BancoDeDados {
  private readonly pedidos = new Map<number, PedidoRegistro>();
  private readonly historico: RegistroHistorico[] = [];
  private proximoId = 1;

  salvarPedido(dados: Omit<PedidoRegistro, "id" | "criadoEm">): PedidoRegistro {
    const registro: PedidoRegistro = {
      ...dados,
      id: this.proximoId++,
      criadoEm: new Date()
    };

    this.pedidos.set(registro.id, registro);
    return registro;
  }

  buscarPedido(id: number): PedidoRegistro | undefined {
    return this.pedidos.get(id);
  }

  listarPedidos(): PedidoRegistro[] {
    return [...this.pedidos.values()];
  }

  registrarHistorico(pedidoId: number, mensagem: string): void {
    this.historico.push({ pedidoId, mensagem, data: new Date() });
  }

  listarHistorico(pedidoId?: number): RegistroHistorico[] {
    return this.historico.filter(
      (registro) => pedidoId === undefined || registro.pedidoId === pedidoId
    );
  }
}
