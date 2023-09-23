import express, { Request, Response } from "express";
import { LoginSchema } from "../util/types";
import { LoginController } from "../controller/loginController";


const LoginRouter = express.Router();

LoginRouter.get("/login", async (req: Request, res: Response) => {

    const loginDTO: LoginSchema = req.body;
    const validarLogin = await LoginController.validarLoginController(loginDTO);
    // Verifica se a resposta do controlador existe
    if (validarLogin) {
        res.status(200).send(validarLogin);
    } else {
        res.sendStatus(404);
    }
});

export default LoginRouter