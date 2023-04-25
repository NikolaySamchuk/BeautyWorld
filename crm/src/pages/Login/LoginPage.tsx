import { useAuth } from "../../contexts/AuthContext";
import { AuthForm } from "./components/AuthForm";
import './LoginPageStyle.css'

export function LoginPage() {
    const { login } = useAuth();

    return (
        <>
            <div className="auth">
                <h1>Авторизация</h1>
                <AuthForm onLogin={login} />
            </div>
        </>
    );
}