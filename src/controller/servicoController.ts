import { IServico } from "../model/servicoModel";
import { ServicoService } from "../service/servicoService";

export class ServicoController {
    static async selecionarTodosServicoController(): Promise<Array<IServico> | undefined> {
        const retSelecionarTodosServico = await ServicoService.selecionarTodosServicoService();
        return retSelecionarTodosServico;
    }

    static async criarServicoController(objectDTO: IServico): Promise<IServico | null | undefined> {
        const retCriarServico = await ServicoService.criarServicoService(objectDTO);
        return retCriarServico;
    }

    static async detalharServicoController(id: string): Promise<IServico | null | undefined> {
        const idDetalharServico: IServico | null | undefined = await ServicoService.detalharServicoService(id);
        return idDetalharServico;
    }

    static async excluirServicoController(id: string): Promise<IServico | null | undefined> {
        const idExcluirServico: IServico | null | undefined = await ServicoService.excluirServicoService(id);
        return idExcluirServico;
    }

    static async alterarServicoController(id: string, objectDTO: IServico): Promise<IServico | null | undefined> {
        const idAlterarServico: IServico | null | undefined = await ServicoService.alterarServicoService(id, objectDTO);
        return idAlterarServico;
    }
}