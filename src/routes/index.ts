// Importa o módulo 'express'
import express from "express";

// Importa tipos específicos do módulo 'express' para utilização
import { Express, Request, Response } from "express";

// Importa o módulo 'ClienteRouter' de routes de clienteRoutes
import ClienteRouter from "./clienteRoutes";

// Define as rotas da aplicação, recebendo uma instância do Express como parâmetro
export const routes = (app: Express) => {
    // Define uma rota GET para a raiz ("/") da aplicação
    app.get("/", (req: Request, res: Response) => {
        // Envia uma resposta JSON com uma mensagem
        res.status(200).json({ message: "api serviços" });
    });

    // Utiliza o middleware 'express.json()' para fazer o parsing do corpo das requisições em JSON
    // e associa o roteador 'ClienteRouter' à aplicação
    app.use(express.json(), ClienteRouter);
}