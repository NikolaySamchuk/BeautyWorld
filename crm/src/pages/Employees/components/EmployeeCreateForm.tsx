import { FormEvent, useState } from "react";
import { Button} from 'antd';
import { CreateStaffDto } from "../../../common/dto";

export function EmployeeCreateForm({ onCreate }: { onCreate: (data:CreateStaffDto) => void }) {
    const [firstName, setFirstName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [surName, setSurName] = useState('');
    const [position, setPosition] = useState('');
    const [startWorkDate, setStartWorkDate] = useState('');
    const [photo, setPhoto] = useState('');
    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        onCreate({ firstName, patronymic, surName, position, startWorkDate, photo});
    }

    return (
        <form className="create-card" onSubmit={handleForm}>
            <h1 className="create-card__title">Новый сотрудник</h1>
            <label className="create-card__label" htmlFor="firstName">Введие имя</label>
            <input className="create-card__input" value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name='firstName' placeholder='Имя' required/>
            <label className="create-card__label" htmlFor="patronymic">Введие отчество</label>
            <input className="create-card__input" value={patronymic} onChange={e => setPatronymic(e.target.value)} type="text" name='patronymic' placeholder='Отчестово' required/>
            <label className="create-card__label" htmlFor="surName">Введие фамилию</label>
            <input className="create-card__input" value={surName} onChange={e => setSurName(e.target.value)} type="text" name='surName' placeholder='Фамилия' required/>
            <label className="create-card__label" htmlFor="position">Введие должность</label>
            <input className="create-card__input" value={position} onChange={e => setPosition(e.target.value)} type="text" name='position' placeholder='Должность' required/>
            <label className="create-card__label" htmlFor="startWorkDate">Введие начало работы</label>
            <input className="create-card__input" value={startWorkDate} onChange={e => setStartWorkDate(e.target.value)} type="datetime-local" name='startWorkDate' placeholder='Начало работы'/>
            <label className="create-card__label" htmlFor="photo">Установите фото</label>
            <input className="create-card__input" value={photo} onChange={e => setPhoto(e.target.value)} type="file" name='photo' placeholder='Фото'/>
            <Button htmlType="submit" type="primary" size="large">Добавить сотрудника</Button>
        </form>
    )
}