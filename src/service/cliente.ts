import Cliente, {ICliente} from "../model/cliente";

export  class ClienteService{

    static async getAllClient(): Promise<Array<ICliente> | undefined>{
        try {
            const AllClients: Array<ICliente> = await Cliente.find({});
            return AllClients;
        } catch (err) {
            console.log(err);
        }
    }

    static async createClient(objectDTO: ICliente): Promise<ICliente|undefined> {
        try {
            const client: ICliente = new Cliente({
                nome: objectDTO.nome,
                dataNascimento: objectDTO.dataNascimento,
                rua: objectDTO.rua,
                obs: objectDTO.obs,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo
            });
            const clientSaved = await client.save();
            return clientSaved;
        } catch (err) {
            console.log(err);
        }
    }

    static async getClientById(id: string): Promise<ICliente|null|undefined>{
        try{
            const myClientByIdDTO: ICliente | null | undefined = await Cliente.findById(id);
            return myClientByIdDTO;
        } catch (err) {
            console.log(err);
        }
    }

    static async alterarClienteService(id: string, objectDTO: ICliente): Promise<ICliente|null|undefined>{
        try{
            const client = await Cliente.findOneAndUpdate({_id:id},objectDTO);
            if (client){
                const updateCliente = await Cliente.findById(id);
                return updateCliente;
            }else{
                return undefined;
            }
        } catch (err) {
            console.log(err);
        } 
    }

    static async deleteClienteService(id: string): Promise<ICliente|null|undefined>{
        try{
            const idDelete = {_id: id}
            const myClientByIdDeleteDTO: ICliente | null | undefined = await Cliente.findOneAndDelete(idDelete);
            return myClientByIdDeleteDTO;
        } catch (err) {
            console.log(err);
        }
    }
}