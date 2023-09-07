import express, { Request, Response } from "express";
import { ClienteController } from "../controller/cliente";
import { ICliente } from "../model/cliente";

const ClienteRouter = express.Router();

ClienteRouter.get("/cliente", async (req: Request, res: Response) => {
    const AllCli = await ClienteController.getAllCli();
    if (AllCli){
        res.status(200).send(AllCli);
    }else{
        res.sendStatus(404);
    }
    res.status(200).send("você está em /cliente get");
});

ClienteRouter.get("/cliente/:id", async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const clientByIdDTO = await ClienteController.getClientById(idFromUser);
    if (clientByIdDTO){
        res.status(200).send(clientByIdDTO);
    }else{
        res.sendStatus(400);
    }
});

ClienteRouter.post("/cliente", async (req: Request, res: Response) => {
    const ClienteFromUser: ICliente = req.body;
    const createdClient = await ClienteController.createCli(ClienteFromUser);
    if (createdClient){
        res.status(201).send(createdClient);
    }else{
        res.sendStatus(400);
    }
});

ClienteRouter.put("/cliente/:id", async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const clienteObg: ICliente = req.body;
    const updateCliente = await ClienteController.alterarClienteController(idFromUser, clienteObg);
    if (updateCliente){
        res.status(201).send(updateCliente);
    }else{
        res.sendStatus(400);
    }
});

ClienteRouter.delete("/cliente/:id", async (req: Request, res: Response) => {
    const idFromUser: string = req.params.id;
    const deteleClinteRoutes = await ClienteController.deleteClienteController(idFromUser);
    if (deteleClinteRoutes){
        res.status(200).send("Removido com sucesso");
    }else{
        res.sendStatus(400);
    }
});

export default ClienteRouter;