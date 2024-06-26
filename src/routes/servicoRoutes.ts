import express, { Request, Response } from "express";
import { ServicoController } from "../controller/servicoController";
import { IServico } from "../model/servicoModel";
import { authToken } from "../middlewares/authentication";

const ServicoRouter = express.Router();

ServicoRouter.get("/servico", authToken, async (req: Request, res: Response) => {
    const retSelecionarTodosServico = await ServicoController.selecionarTodosServicoController();
    if (retSelecionarTodosServico) {
        res.status(200).send(retSelecionarTodosServico);
    } else {
        res.sendStatus(404);
    }
});

ServicoRouter.get("/servico/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const retDetalharServico = await ServicoController.detalharServicoController(idFromUser);
    if (retDetalharServico) {
        res.status(200).send(retDetalharServico);
    } else {
        res.sendStatus(400);
    }
});

ServicoRouter.post("/servico", authToken, async (req: Request, res: Response) => {
    const fromServico: IServico = req.body;
    const retCriarServico = await ServicoController.criarServicoController(fromServico);
    if (retCriarServico) {
        res.status(201).send(retCriarServico);
    } else {
        res.sendStatus(400);
    }
});

ServicoRouter.put("/servico/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const fromServico: IServico = req.body;
    const retAlterarServico = await ServicoController.alterarServicoController(idFromUser, fromServico);
    if (retAlterarServico) {
        res.status(201).send(retAlterarServico);
    } else {
        res.sendStatus(400);
    }
});

ServicoRouter.delete("/servico/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const retExcluirServico = await ServicoController.excluirServicoController(idFromUser);
    if (retExcluirServico) {
        res.status(200).send("Removido com sucesso");
    } else {
        res.sendStatus(400);
    }
});


export default ServicoRouter;