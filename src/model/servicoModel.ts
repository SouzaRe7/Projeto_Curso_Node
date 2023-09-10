import mongoose, { Document, Model } from "mongoose";
import Cliente from "./clienteModel";
import Funcionario from "./funcionarioModel";

mongoose.set("debug", true);

export interface IServico extends Document {
    nome: string;
    descricao?: string;
    valor: number;
    tempoServico?: number;
    ativo?: boolean;
    funcionario: typeof Funcionario | string;
    cliente: typeof Cliente | string;
    status: number; // 0-> aguardando 1->em andamento 2->cancelado 3->finalizado
}

const servicoSchema = new mongoose.Schema<IServico>(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: false },
        valor: { type: Number, required: true },
        tempoServico: { type: Number, required: false },
        ativo: { type: String, default: true },
        funcionario: { type: mongoose.Types.ObjectId, ref: "tb_funcionario" },
        cliente: { type: mongoose.Types.ObjectId, ref: "tb_cliente" },
        status: { type: Number, required: true }
    },
    {
        versionKey: false
    }
);

const Servico: Model<IServico> = mongoose.model<IServico>("tb_servico", servicoSchema);

export default Servico;