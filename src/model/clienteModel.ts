// Importa o módulo 'mongoose' e as interfaces 'Document' e 'Model' do mesmo módulo
import mongoose, { Document, Model } from "mongoose";

// Configuração para ativar a depuração (debug) do Mongoose
mongoose.set("debug", true);

// Define a interface 'ICliente' que estende a interface 'Document' do Mongoose
export interface ICliente extends Document {
    nome: string;
    dataNascimento: Date;
    rua: string;
    obs?: string;
    bairro: string;
    cep: string;
    foto?: string;
    ativo?: Boolean;
}

// Define o esquema (schema) do cliente usando o Mongoose
const clienteSchema = new mongoose.Schema<ICliente>(
    {
        // Define o campo 'nome' como uma string obrigatória
        nome: { type: String, required: true },

        // Define o campo 'dataNascimento' como uma data obrigatória
        dataNascimento: { type: Date, required: true },

        // Define o campo 'rua' como uma string obrigatória
        rua: { type: String, required: true },

        // Define o campo 'obs' como uma string opcional
        obs: { type: String, required: false },

        // Define o campo 'bairro' como uma string obrigatória
        bairro: { type: String, required: true },

        // Define o campo 'cep' como uma string obrigatória
        cep: { type: String, required: true },

        // Define o campo 'foto' como uma string opcional
        foto: { type: String, required: false },

        // Define o campo 'ativo' como um booleano com valor padrão 'true'
        ativo: { type: Boolean, default: true }
    },
    {
        // Desativa a inclusão do campo '__v' para controle de versão no documento
        versionKey: false
    }
);

// Define o modelo (Model) do cliente usando o Mongoose
const Cliente: Model<ICliente> = mongoose.model<ICliente>("tb_cliente", clienteSchema);

// Exporta o modelo do cliente para ser usado em outras partes do código
export default Cliente;

