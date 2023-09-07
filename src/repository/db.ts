// Importa o módulo 'mongoose'
import mongoose from "mongoose";

// Chamo no app para a conexão aberta com o banco para fazer as transações

// Função assíncrona auto-invocada (IIFE) para estabelecer uma conexão com o MongoDB
(async () => {
    // Verifica se a variável de ambiente 'DB_URL' está definida
    if (process.env.DB_URL) {
        // Aguarda a conexão com o MongoDB usando a URL fornecida
        await mongoose
            .connect(process.env.DB_URL)
            .then((res) => {
                console.log("MongoDB atlas connection succeeded"); // Exibe uma mensagem de sucesso se a conexão for estabelecida
            })
            .catch((err) => {
                console.log("Error in db collectiond: " + err); // Exibe uma mensagem de erro se ocorrer algum problema na conexão
            });
    }
})();

// Obtém a conexão do mongoose
const db = mongoose.connection;

// Exporta a conexão com o banco de dados para ser usada em outras partes do código
export default db;