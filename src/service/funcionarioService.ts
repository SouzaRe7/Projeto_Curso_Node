import Funcionario, { IFuncionario } from "../model/funcionarioModel";
import bcrypt from "bcrypt";


export class FuncionarioService {

    static async selecionarTodosFuncionarioService(): Promise<Array<IFuncionario> | undefined> {
        try {
            const retSelecionarTodosFuncionario: Array<IFuncionario> = await Funcionario.find({});
            return retSelecionarTodosFuncionario;
        } catch (err) {
            console.log(err);
        }
    }

    static async criarFuncionarioService(objectDTO: IFuncionario): Promise<IFuncionario | null | undefined> {
        try {
            const validarEmail = await Funcionario.findOne({ email: objectDTO.email });
            if (validarEmail) {
                return undefined;
            }
            const senhaCriptografada = await bcrypt.hash(objectDTO.senha, 10);
            const criarFuncionario: IFuncionario = new Funcionario({
                nome: objectDTO.nome,
                email: validarEmail,
                senha: senhaCriptografada,
                dataNascimento: objectDTO.dataNascimento,
                dataAdmisao: objectDTO.dataAdmisao,
                dataDemisao: objectDTO.dataDemisao,
                obsDemisao: objectDTO.obsDemisao,
                rua: objectDTO.rua,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo,
                salario: objectDTO.salario,
                admin: objectDTO.admin,
            });
            const salvarFuncionario = await criarFuncionario.save();
            return salvarFuncionario;
        } catch (err) {
            console.log(err);
        }
    }

    static async detalharFuncionarioService(id: string): Promise<IFuncionario | null | undefined> {
        try {
            const idDetalharFuncionario: IFuncionario | null | undefined = await Funcionario.findById(id);
            return idDetalharFuncionario;
        } catch (err) {
            console.log(err);
        }
    }

    static async alterarFuncionarioService(id: string, objectDTO: IFuncionario): Promise<IFuncionario | null | undefined> {
        try {
            if (objectDTO.email) {
                const validarEmail = await Funcionario.findOne({ email: objectDTO.email });
                if (validarEmail?._id != id) {
                    return undefined;
                }
            }
            if (objectDTO.senha) {
                const novaSenha = await bcrypt.hash(objectDTO.senha, 10);
                objectDTO.senha = novaSenha;
            }
            const alteracaoFuncionario = await Funcionario.findOneAndUpdate({ _id: id }, objectDTO);
            if (alteracaoFuncionario) {
                const alterarFuncionario = await Funcionario.findById(id);
                return alterarFuncionario;
            } else {
                return undefined;
            }
        } catch (err) {
            console.log(err);
        }
    }

    static async excluirFuncionarioService(id: string): Promise<IFuncionario | null | undefined> {
        try {
            const idExcluirFuncionario: IFuncionario | null | undefined = await Funcionario.findOneAndDelete({ _id: id });
            return idExcluirFuncionario;
        } catch (err) {
            console.log(err);
        }
    }
}