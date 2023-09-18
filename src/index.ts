import "dotenv/config";
import express from "express";
// Importa as rotas da aplicação do arquivo "routes.ts"
import { routes } from "./routes";

// Importa a conexão com o banco de dados do arquivo "db.ts"
import db from "./repository/db";

// Estabelece um listener de eventos para tratamento de erros na conexão com o banco
db.on("error", () => console.log("Erro ao restabelecer conexao"));

// Estabelece um listener de eventos para quando a conexão com o banco for aberta
db.once("open", () => {
    console.log("conectado no banco"); // Exibe uma mensagem quando a conexão for estabelecida com sucesso
});

// Cria uma instância do Express
const app = express();

// Configura as rotas da aplicação
routes(app);

// Inicia o servidor Express e escuta na porta definida na variável de ambiente "process.env.PORT"
app.listen(process.env.PORT, () => {
    console.log("servidor rodando na porta: " + process.env.PORT); // Exibe uma mensagem informando a porta em que o servidor está rodando
});

// routes -> controller -> service -> repository -> model
//teste