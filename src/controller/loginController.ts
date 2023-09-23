import { LoginService } from "../service/loginService";
import { LoginSchema } from "../util/types";

export class LoginController {

    static async validarLoginController(loginDTO: LoginSchema): Promise<LoginSchema | undefined> {
        const retValidaLogin = await LoginService.validarLoginService(loginDTO);
        return retValidaLogin;
    }
}
