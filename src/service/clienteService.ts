// Importa o modelo de cliente 'Cliente' e a interface 'ICliente' do módulo 'clienteModel'
import Cliente, { ICliente } from "../model/clienteModel";

// Define a classe de serviço de cliente
export class ClienteService {

    // Método para selecionar todos os clientes
    static async selecionarTodosClienteService(): Promise<Array<ICliente> | undefined> {
        try {
            // Obtém todos os clientes do banco de dados
            const retSelecionarTodosCliente: Array<ICliente> = await Cliente.find({});
            // Retorna a lista de clientes ou 'undefined' se ocorrer algum erro
            return retSelecionarTodosCliente;
        } catch (err) {
            // Registra e imprime qualquer erro ocorrido
            console.log(err);
        }
    }

    // Método para criar um novo cliente
    static async criarClienteService(objectDTO: ICliente): Promise<ICliente | null | undefined> {
        try {
            // Cria um novo objeto de cliente com base nos dados recebidos
            const criarCliente: ICliente = new Cliente({
                nome: objectDTO.nome,
                dataNascimento: objectDTO.dataNascimento,
                rua: objectDTO.rua,
                obs: objectDTO.obs,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo
            });

            // Salva o cliente criado no banco de dados
            const salvarCliente = await criarCliente.save();
            // Retorna o cliente criado ou 'undefined' se ocorrer algum erro
            return salvarCliente;
        } catch (err) {
            // Registra e imprime qualquer erro ocorrido
            console.log(err);
        }
    }

    // Método para detalhar um cliente por ID
    static async detalharClienteService(id: string): Promise<ICliente | null | undefined> {
        try {
            // Busca um cliente pelo ID no banco de dados
            const idDetalharCliente: ICliente | null | undefined = await Cliente.findById(id);
            // Retorna o cliente detalhado, 'null' se o cliente não for encontrado ou 'undefined' se ocorrer algum erro
            return idDetalharCliente;
        } catch (err) {
            // Registra e imprime qualquer erro ocorrido
            console.log(err);
        }
    }

    // Método para alterar um cliente por ID
    static async alterarClienteService(id: string, objectDTO: ICliente): Promise<ICliente | null | undefined> {
        try {
            // Atualiza um cliente pelo ID com os novos dados recebidos
            const alteracaoCliente = await Cliente.findOneAndUpdate({ _id: id }, objectDTO);
            if (alteracaoCliente) {
                // Se o cliente foi atualizado com sucesso, busca e retorna o cliente atualizado
                const alterarCliente = await Cliente.findById(id);
                return alterarCliente;
            } else {
                // Retorna 'undefined' se ocorrer algum erro durante a atualização
                return undefined;
            }
        } catch (err) {
            // Registra e imprime qualquer erro ocorrido
            console.log(err);
        }
    }

    // Método para excluir um cliente por ID
    static async deleteClienteService(id: string): Promise<ICliente | null | undefined> {
        try {
            // Define o ID do cliente a ser excluído
            const idCliente = { _id: id };
            // Busca e exclui o cliente pelo ID no banco de dados
            const idExcluirCliente: ICliente | null | undefined = await Cliente.findOneAndDelete(idCliente);
            // Retorna o cliente excluído, 'null' se o cliente não for encontrado ou 'undefined' se ocorrer algum erro
            return idExcluirCliente;
        } catch (err) {
            // Registra e imprime qualquer erro ocorrido
            console.log(err);
        }
    }
}