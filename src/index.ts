import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import db from "./repository/db";

// estabelecer conexão com banco

db.on("error", () => console.log("Erro ao restabelecer conexao"));
db.once("open",() =>{
    console.log("conectado no banco");
    
});

// Instância do express
const app = express();

routes(app);

app.listen(process.env.PORT, () => {
    console.log("servidor rodando na porta: " + process.env.PORT);
});

// routes -> controller -> service -> repository -> model