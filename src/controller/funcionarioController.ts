import { IFuncionario } from "../model/funcionarioModel";
import { FuncionarioService } from "../service/funcionarioService";

export class FuncionarioController {

    static async selecionarTodosFuncionarioController(): Promise<Array<IFuncionario> | undefined> {
        const retSelecionarTodosFuncionario = await FuncionarioService.selecionarTodosFuncionarioService();
        return retSelecionarTodosFuncionario;
    }

    static async criarFuncionarioController(objectDTO: IFuncionario): Promise<IFuncionario | null | undefined> {
        const retCriarFuncionario = await FuncionarioService.criarFuncionarioService(objectDTO);
        return retCriarFuncionario;
    }

    static async detalharFuncionarioController(id: string): Promise<IFuncionario | null | undefined> {
        const idDetalharFuncionario: IFuncionario | null | undefined = await FuncionarioService.detalharFuncionarioService(id);
        return idDetalharFuncionario;
    }

    static async excluirFuncionarioController(id: string): Promise<IFuncionario | null | undefined> {
        const idExcluirFuncionario: IFuncionario | null | undefined = await FuncionarioService.excluirFuncionarioService(id);
        return idExcluirFuncionario;
    }

    static async alterarFuncionarioController(id: string, objectDTO: IFuncionario): Promise<IFuncionario | null | undefined> {
        const idAlterarFuncionario: IFuncionario | null | undefined = await FuncionarioService.alterarFuncionarioService(id, objectDTO);
        return idAlterarFuncionario;
    }
}