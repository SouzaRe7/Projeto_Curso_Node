import express, { Request, Response } from "express";
import { FuncionarioController } from "../controller/funcionarioController";
import { IFuncionario } from "../model/funcionarioModel";
import { authToken } from "../middlewares/authentication";

const FuncionarioRouter = express.Router();

FuncionarioRouter.get("/funcionario", authToken, async (req: Request, res: Response) => {
    const retSelecionarTodosFuncionario = await FuncionarioController.selecionarTodosFuncionarioController();
    if (retSelecionarTodosFuncionario) {
        res.status(200).send(retSelecionarTodosFuncionario);
    } else {
        res.sendStatus(404);
    }
});

FuncionarioRouter.get("/funcionario/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const retDetalharFuncionario = await FuncionarioController.detalharFuncionarioController(idFromUser);
    if (retDetalharFuncionario) {
        res.status(200).send(retDetalharFuncionario);
    } else {
        res.sendStatus(400);
    }
});

FuncionarioRouter.post("/funcionario", authToken, async (req: Request, res: Response) => {
    const fromFuncionario: IFuncionario = req.body;
    const retCriarFuncionario = await FuncionarioController.criarFuncionarioController(fromFuncionario);
    if (retCriarFuncionario) {
        res.status(201).send(retCriarFuncionario);
    } else {
        res.sendStatus(400);
    }
});

FuncionarioRouter.put("/funcionario/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const funcionarioObj: IFuncionario = req.body;
    const retAlterarFuncionario = await FuncionarioController.alterarFuncionarioController(idFromUser, funcionarioObj);
    if (retAlterarFuncionario) {
        res.status(201).send(retAlterarFuncionario);
    } else {
        res.sendStatus(400);
    }
});

FuncionarioRouter.delete("/funcionario/:id", authToken, async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const retExcluirFuncionario = await FuncionarioController.excluirFuncionarioController(idFromUser);
    if (retExcluirFuncionario) {
        res.status(200).send("Removido com sucesso");
    } else {
        res.sendStatus(400);
    }
});

export default FuncionarioRouter;