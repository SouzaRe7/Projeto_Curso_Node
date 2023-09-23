import Funcionario from "../model/funcionarioModel";
import { LoginSchema } from "../util/types";
import bcrypt from "bcrypt";

export class LoginService {

    static async validarLoginService(loginDTO: LoginSchema): Promise<LoginSchema | undefined> {
        const loginFuncionario = await Funcionario.findOne({ email: loginDTO.email });
        if (loginFuncionario && loginDTO.senha) {
            const senhaFuncionario = await bcrypt.compare(loginDTO.senha, loginFuncionario.senha);
            if (senhaFuncionario) {
                const formLogin: LoginSchema = {
                    email: loginFuncionario.email,
                };
                return formLogin;
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}