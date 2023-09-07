"use strict";
// Importa a função "__importDefault" para lidar com módulos que usam 'import'
var __importDefault = (this && this.__importDefault) || function (mod) {
    // Retorna o módulo se ele for um módulo do ES6 (com 'esModule' definido como true)
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Define que este é um módulo do CommonJS e exporta o objeto 'exports'
Object.defineProperty(exports, "__esModule", { value: true });

// Importa as variáveis de ambiente definidas em um arquivo .env
require("dotenv/config");

// Importa o módulo 'express' e atribui-o à variável 'express_1'
const express_1 = __importDefault(require("express"));

// Cria uma instância do Express
const app = (0, express_1.default)();

// Inicia o servidor Express e escuta na porta definida na variável de ambiente 'process.env.PORT'
app.listen(process.env.PORT, () => {
    // Exibe uma mensagem informando a porta em que o servidor está rodando
    console.log("servidor rodando na porta: " + process.env.PORT);
});
