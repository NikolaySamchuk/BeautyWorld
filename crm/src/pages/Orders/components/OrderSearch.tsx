import { FormEvent, useState } from 'react';
import { Button } from 'antd';

interface OrderSearchProps {
    onNameSearch: (firstName: string) => void;
    onStatusSearch: (status: string) => void;
    onDateSearch: (visitDateFrom: string, visitDateTo: string) => void;
}

export function OrderSearch(props: OrderSearchProps) {

    const [firstName, setFirstName] = useState('');
    const [status, setStatus] = useState('');
    const [visitDateFrom, setVisitDateFrom] = useState('');
    const [visitDateTo, setVisitDateTo] = useState('');
    const nameSearch = (event: FormEvent) => {
        event.preventDefault();
        props.onNameSearch(firstName);
    }
    const statusSearch = (event: FormEvent) => {
        event.preventDefault();
        props.onStatusSearch(status);
    }
    const dateSearch = (event: FormEvent) => {
        event.preventDefault();
        props.onDateSearch(visitDateFrom, visitDateTo);
    }

    return (
        <>
            <div style={{ display: 'flex', gap: 10 }}>
                <form className="create-card" id="reset-form" onSubmit={nameSearch} style={{ minWidth: 270 }}>
                    <h1 className="create-card__title" style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Поиск клиента</h1>
                    <label className="create-card__label" htmlFor="name">Введите имя</label>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <input className="create-card__input" type="text" name='name' onChange={e => setFirstName(e.target.value)} placeholder='Имя' style={{ margin: 0 }} />
                        <Button htmlType="submit">Искать</Button>
                    </div>
                </form>
                <form className="create-card" id="reset-form" onSubmit={dateSearch} style={{ minWidth: 270 }}>
                    <h1 className="create-card__title" style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Сортировка по дате</h1>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <div>
                            <label className="create-card__label" htmlFor="visitDateFrom">Дата с</label>
                            <input className="create-card__input" type="datetime-local" onChange={e => setVisitDateFrom(e.target.value)} name='visitDateFrom' style={{ margin: 0 }} />
                        </div>
                        <div>
                            <label className="create-card__label" htmlFor="visitDateTo">Дата по</label>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                <input className="create-card__input" type="datetime-local" onChange={e => setVisitDateTo(e.target.value)} name='visitDateTo' style={{ margin: 0 }} />
                                <Button htmlType="submit">Сортировать</Button>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="create-card" id="reset-form" onSubmit={statusSearch} style={{ minWidth: 270 }}>
                    <h1 className="create-card__title" style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>Сортировка по статусу</h1>
                    <label className="create-card__label" htmlFor="status">Выбирите статус</label>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <select className="create-card__input" id="status-select" onChange={e => setStatus(e.target.value)} name='status' style={{ margin: 0 }}>
                            <option value="">Не выбрано</option>
                            <option value="Opened">Opened</option>
                            <option value="Closed ">Closed </option>
                        </select>
                        <Button htmlType="submit">Сортировать</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
