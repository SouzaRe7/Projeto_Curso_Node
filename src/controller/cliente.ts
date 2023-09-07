import { ICliente } from "../model/cliente";
import { ClienteService } from "../service/cliente";

export class ClienteController {
    static async getAllCli(): Promise<Array<ICliente>|undefined>{
        const AllData = await ClienteService.getAllClient();
        return AllData;
    }

    static async createCli(objectDTO: ICliente): Promise<ICliente|undefined>{
        const createdClient = await ClienteService.createClient(objectDTO);
        return createdClient;
    }

    static async getClientById(id: string): Promise<ICliente|null|undefined>{
        const clientById: ICliente | null | undefined = await ClienteService.getClientById(id);
        return clientById;
    }

    static async deleteClienteController(id: string): Promise<ICliente|null|undefined>{
        const deleteClienteId: ICliente|null|undefined = await ClienteService.deleteClienteService(id);
        return deleteClienteId;
    }

    static async alterarClienteController(id: string, objectDTO: ICliente): Promise<ICliente|null|undefined>{
        const alterarClienteId: ICliente|null|undefined = await ClienteService.alterarClienteService(id, objectDTO);
        return alterarClienteId;
    }
}