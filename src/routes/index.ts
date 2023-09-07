import express from "express";
import { Express, Request,  Response} from "express";
import ClienteRouter from "./cliente";

export const routes = (app: Express) => {
    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({message:"api serviços"});
    });
    app.use(express.json(), ClienteRouter);
}