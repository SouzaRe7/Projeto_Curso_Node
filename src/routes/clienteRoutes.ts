// Importa o módulo 'express' e os tipos Request e Response do mesmo módulo
import express, { Request, Response } from "express";

// Importa o controlador do cliente ('ClienteController') e a interface 'ICliente' do modelo ('cliente')
import { ClienteController } from "../controller/clienteController";
import { ICliente } from "../model/clienteModel";

// Cria um roteador do Express
const ClienteRouter = express.Router();

// Define uma rota GET para buscar todos os clientes
ClienteRouter.get("/cliente", async (req: Request, res: Response) => {
    // Chama o método 'selecionarTodosClienteController' do controlador de cliente
    const retSelecionarTodosCliente = await ClienteController.selecionarTodosClienteController();
    // Verifica se a resposta do controlador existe
    if (retSelecionarTodosCliente) {
        // Envia uma resposta com status 200 (OK) e os dados retornados pelo controlador
        res.status(200).send(retSelecionarTodosCliente);
    } else {
        // Caso contrário, envia um status 404 (Não encontrado)
        res.sendStatus(404);
    }
});

// Define uma rota GET para buscar um cliente por ID
ClienteRouter.get("/cliente/:id", async (req: Request, res: Response) => {
    // Obtém o ID do cliente a partir dos parâmetros da URL
    const idFromUser: string = req.params.id;
    // Chama o método 'detalharClienteController' do controlador de cliente com o ID
    const retDetalharCliente = await ClienteController.detalharClienteController(idFromUser);
    // Verifica se a resposta do controlador existe
    if (retDetalharCliente) {
        // Envia uma resposta com status 200 (OK) e os dados retornados pelo controlador
        res.status(200).send(retDetalharCliente);
    } else {
        // Caso contrário, envia um status 400 (Solicitação inválida)
        res.sendStatus(400);
    }
});

// Define uma rota POST para criar um novo cliente
ClienteRouter.post("/cliente", async (req: Request, res: Response) => {
    // Obtém os dados do cliente a partir do corpo da requisição
    const fromCliente: ICliente = req.body;
    // Chama o método 'criarClienteController' do controlador de cliente com os dados do cliente
    const retCriarCliente = await ClienteController.criarClienteController(fromCliente);
    // Verifica se a resposta do controlador existe
    if (retCriarCliente) {
        // Envia uma resposta com status 201 (Criado) e os dados do cliente criado
        res.status(201).send(retCriarCliente);
    } else {
        // Caso contrário, envia um status 400 (Solicitação inválida)
        res.sendStatus(400);
    }
});

// Define uma rota PUT para atualizar um cliente por ID
ClienteRouter.put("/cliente/:id", async (req: Request, res: Response) => {
    // Obtém o ID do cliente a partir dos parâmetros da URL
    const idFromUser: string = req.params.id;
    // Obtém os dados do cliente a partir do corpo da requisição
    const clienteObj: ICliente = req.body;
    // Chama o método 'alterarClienteController' do controlador de cliente com o ID e os dados do cliente
    const retAlterarCliente = await ClienteController.alterarClienteController(idFromUser, clienteObj);
    // Verifica se a resposta do controlador existe
    if (retAlterarCliente) {
        // Envia uma resposta com status 201 (Criado) e os dados do cliente atualizado
        res.status(201).send(retAlterarCliente);
    } else {
        // Caso contrário, envia um status 400 (Solicitação inválida)
        res.sendStatus(400);
    }
});

// Define uma rota DELETE para excluir um cliente por ID
ClienteRouter.delete("/cliente/:id", async (req: Request, res: Response) => {
    // Obtém o ID do cliente a partir dos parâmetros da URL
    const idFromUser: string = req.params.id;
    // Chama o método 'excluirClienteController' do controlador de cliente com o ID
    const retExcluirClinte = await ClienteController.excluirClienteController(idFromUser);
    // Verifica se a resposta do controlador existe
    if (retExcluirClinte) {
        // Envia uma resposta com status 200 (OK) indicando que o cliente foi removido com sucesso
        res.status(200).send("Removido com sucesso");
    } else {
        // Caso contrário, envia um status 400 (Solicitação inválida)
        res.sendStatus(400);
    }
});

// Exporta o roteador do cliente para ser usado em outros lugares
export default ClienteRouter;