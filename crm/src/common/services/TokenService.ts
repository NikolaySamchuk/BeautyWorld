import { TOKEN_KEY } from "../constants";
import jwtDecode from "jwt-decode";

class TokenService {
    setToken(access_token: string) {
        localStorage.setItem(TOKEN_KEY, access_token);
    }

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    }

    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    }

    isTokenValid(): boolean {
        const token = this.getToken();

        if (!token) {
            return false;
        }

        const decodeToken = jwtDecode(token);

        return this.tokenValid(decodeToken);
    }

    private tokenValid(token: any = {}): boolean {
        const now = Date.now() / 1000;
        return token.exp > now;
    }
}

export default new TokenService();