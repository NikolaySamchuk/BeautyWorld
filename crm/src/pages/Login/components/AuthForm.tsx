import { FormEventHandler, useRef, useState } from "react";
import { AuthDataDto } from "../../../common/dto";
import { Button} from 'antd';

interface authFormProps {
    onLogin: (authData: AuthDataDto) => void;
}

export function AuthForm(props: authFormProps) {
    const form = useRef<any>();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: FormEventHandler<HTMLFormElement> | any): void => {
        event.preventDefault();
        props.onLogin({ userName, password });
        reset();
    }
    const reset = () => {
        setUserName('');
        setPassword('');
    }

    return (
        <>
            <form className="auth__form" ref={form} onSubmit={handleSubmit}>
                <label className="auth__label" htmlFor="name">Ведитете имя пользователя</label>
                <input className="auth__input" id="name" type="text" required value={userName} onChange={event => setUserName(event.target.value)} placeholder="Логин"/>
                <label className="auth__label" htmlFor="password">Введите пароль</label>
                <input className="auth__input" id="password" type="password" required value={password} onChange={event => setPassword(event.target.value)} placeholder="Пароль"/>
                <Button htmlType="submit" type="primary" size="large">Вход</Button>
            </form>
        </>
    )
}