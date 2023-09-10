import Servico, { IServico } from "../model/servicoModel";
import Funcionario from "../model/funcionarioModel";
import Cliente from "../model/clienteModel";

export class ServicoService {
    static async criarServicoService(objectDTO: IServico): Promise<IServico | null | undefined> {
        try {
            const idFuncionario = await Funcionario.findById(objectDTO.funcionario);
            const idCliente = await Cliente.findById(objectDTO.cliente);
            const criarServico: IServico = new Servico({
                nome: objectDTO.nome,
                descricao: objectDTO.descricao,
                valor: objectDTO.valor,
                tempoServico: objectDTO.tempoServico,
                ativo: objectDTO.ativo,
                funcionario: idFuncionario,
                cliente: idCliente,
                status: objectDTO.status
            });
            const salvarServico = await criarServico.save();
            return salvarServico;
        } catch (err) {
            console.log(err);
        }
    }

    static async selecionarTodosServicoService(): Promise<Array<IServico> | undefined> {
        try {
            const retSelecionarTodosServico: Array<IServico> = await Servico.find({});
            return retSelecionarTodosServico;
        } catch (err) {
            console.log(err);
        }
    }

    static async detalharServicoService(id: string): Promise<IServico | null | undefined> {
        try {
            const idDetalharServico: IServico | null | undefined = await Servico.findById(id);
            return idDetalharServico;
        } catch (err) {
            console.log(err);
        }
    }

    static async alterarServicoService(id: string, objectDTO: IServico): Promise<IServico | null | undefined> {
        try {
            const alteracaoServico = await Servico.findOneAndUpdate({ _id: id }, objectDTO);
            if (alteracaoServico) {
                const alterarServico = await Servico.findById(id);
                return alterarServico;
            } else {
                return undefined;
            }
        } catch (err) {
            console.log(err);
        }
    }

    static async excluirServicoService(id: string): Promise<IServico | null | undefined> {
        try {
            const idExcluirServico: IServico | null | undefined = await Servico.findOneAndDelete({ _id: id });
            return idExcluirServico;
        } catch (err) {
            console.log(err);
        }
    }
}