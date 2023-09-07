// Importa a interface 'ICliente' do modelo de cliente
import { ICliente } from "../model/clienteModel";

// Importa o serviço de cliente ('ClienteService') para ser usado pelo controlador
import { ClienteService } from "../service/clienteService";

// Define a classe do controlador de cliente
export class ClienteController {
    // Método para selecionar todos os clientes
    static async selecionarTodosClienteController(): Promise<Array<ICliente> | undefined> {
        // Chama o serviço 'selecionarTodosClienteService' para obter a lista de clientes
        const retSelecionarTodosCliente = await ClienteService.selecionarTodosClienteService();
        // Retorna a lista de clientes ou 'undefined' se não houver clientes
        return retSelecionarTodosCliente;
    }

    // Método para criar um novo cliente
    static async criarClienteController(objectDTO: ICliente): Promise<ICliente | null | undefined> {
        // Chama o serviço 'criarClienteService' com os dados do cliente a ser criado
        const retCriarCliente = await ClienteService.criarClienteService(objectDTO);
        // Retorna o cliente criado ou 'undefined' se ocorrer algum erro
        return retCriarCliente;
    }

    // Método para detalhar um cliente por ID
    static async detalharClienteController(id: string): Promise<ICliente | null | undefined> {
        // Chama o serviço 'detalharClienteService' com o ID do cliente
        const idDetalharCliente: ICliente | null | undefined = await ClienteService.detalharClienteService(id);
        // Retorna o cliente detalhado, 'null' se o cliente não for encontrado ou 'undefined' se ocorrer algum erro
        return idDetalharCliente;
    }

    // Método para excluir um cliente por ID
    static async excluirClienteController(id: string): Promise<ICliente | null | undefined> {
        // Chama o serviço 'deleteClienteService' com o ID do cliente a ser excluído
        const idExcluirCliente: ICliente | null | undefined = await ClienteService.deleteClienteService(id);
        // Retorna o cliente excluído, 'null' se o cliente não for encontrado ou 'undefined' se ocorrer algum erro
        return idExcluirCliente;
    }

    // Método para alterar um cliente por ID
    static async alterarClienteController(id: string, objectDTO: ICliente): Promise<ICliente | null | undefined> {
        // Chama o serviço 'alterarClienteService' com o ID do cliente a ser alterado e os novos dados
        const idAlterarCliente: ICliente | null | undefined = await ClienteService.alterarClienteService(id, objectDTO);
        // Retorna o cliente alterado, 'null' se o cliente não for encontrado ou 'undefined' se ocorrer algum erro
        return idAlterarCliente;
    }
}