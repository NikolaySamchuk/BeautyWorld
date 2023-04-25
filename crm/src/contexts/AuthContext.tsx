import { ReactNode, createContext, useContext, useState } from "react";
import { AuthDataDto } from "../common/dto";
import { useNavigate } from "react-router-dom";
import App from "../App";
import AppApi from "../common/api/AppApi";

const TOKEN_KEY = 'access_token';

interface AuthContextValue {
    isLoggedIn: boolean;
    login: (authData: AuthDataDto) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(localStorage.getItem(TOKEN_KEY)));
    const navigate = useNavigate();

    const login = async (authData: AuthDataDto) => {
        try {
            const { access_token } = await AppApi.login(authData)
            localStorage.setItem(TOKEN_KEY, access_token);
            setIsLoggedIn(true);
            navigate('/')
        } catch (e) {
            console.error(e);
        }
    };
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem(TOKEN_KEY);
        navigate('/login')
    };

    const authContext = {
        isLoggedIn,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);