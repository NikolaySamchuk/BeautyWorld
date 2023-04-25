import { AuthDataDto } from "../dto";
import { HttpService } from "./HttpService";

interface TokenDto {
    access_token: string;
}

class AppApi extends HttpService {
    login(data: AuthDataDto) {
        return this.post<TokenDto>('login', data);
    }
}

export default new AppApi();