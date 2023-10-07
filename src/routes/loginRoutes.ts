import express, { Request, Response } from "express";
import { LoginSchema } from "../util/types";
import { LoginController } from "../controller/loginController";


const LoginRouter = express.Router();

LoginRouter.post("/login", async (req: Request, res: Response) => {

    const loginDTO: LoginSchema = req.body;
    const validarLogin = await LoginController.validarLoginController(loginDTO);
    if (validarLogin) {
        res.status(200).send(validarLogin);
    } else {
        res.sendStatus(400);
    }
});

export default LoginRouter