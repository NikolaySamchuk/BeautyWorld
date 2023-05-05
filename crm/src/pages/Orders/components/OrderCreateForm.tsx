import { FormEvent, useState, useEffect } from "react";
import { Button } from 'antd';
import { CreateOrderDto } from "../../../common/dto";
import { EmployeesApi } from "../../../common/api";
import ServiceApi from "../../../common/api/ServiceApi";

export function OrderCreateForm({ onCreate }: { onCreate: (data: CreateOrderDto) => void }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [masterId, setMasterId] = useState<number>(0);
    const [serviceId, setServiceId] = useState<number>(0);
    const [visitDate, setVisitDate] = useState('');
    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        onCreate({ name, phone, masterId, serviceId, visitDate });
    }

    const masterSelectList = document.getElementById('master-select');
    const serviceSelectList = document.getElementById('service-select');


    useEffect(() => {
        const getValue = (async () => {
            const data = await EmployeesApi.getAll();
            for (let i = 0; i < data.length; i++) {
                let newOption = new Option(data[i].fullName, String(data[i].id));
                masterSelectList && masterSelectList.append(newOption);
            }
        })
        getValue();
    }, [masterSelectList]);

    useEffect(() => {
        const getValue = (async () => {
            const data = await ServiceApi.getAll();
            for (let i = 0; i < data.length; i++) {
                let newOption = new Option(data[i].name, String(data[i].id));
                serviceSelectList && serviceSelectList.append(newOption);
            }
        })
        getValue();
    }, [serviceSelectList]);

    return (
        <form className="create-card" id="reset-form" onSubmit={handleForm} style={{ maxHeight: 530 }}>
            <h1 className="create-card__title" style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>Новая запись</h1>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div>
                    <label className="create-card__label" htmlFor="name">Введите имя</label>
                    <input className="create-card__input" value={name} style={{ margin: 0 }} onChange={e => setName(e.target.value)} type="text" name='name' placeholder='Имя' required />
                </div>
                <div>
                    <label className="create-card__label" htmlFor="phone">Введите телефон</label>
                    <input className="create-card__input" value={phone} style={{ margin: 0 }} onChange={e => setPhone(e.target.value)} type="tel" name='phone' placeholder='+7 (___) ___-__-__' />
                </div>
                <div>
                    <label className="create-card__label" htmlFor="masterId">Выбирите мастера</label>
                    <select className="create-card__input" id="master-select" style={{ margin: 0 }} value={masterId} onChange={e => setMasterId(Number(e.target.value))} name='masterId' >
                        <option value="">Не выбран</option>
                    </select>
                </div>
                <div>
                    <label className="create-card__label" htmlFor="serviceId">Выбирите услугу</label>
                    <select className="create-card__input" id="service-select" style={{ margin: 0 }} value={serviceId} onChange={e => setServiceId(Number(e.target.value))} name='serviceId' >
                        <option value="">Не выбран</option>
                    </select>
                </div>
                <div>
                    <label className="create-card__label" htmlFor="visitDate">Установите дату</label>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <input className="create-card__input" style={{ margin: 0 }} value={visitDate} onChange={e => setVisitDate(e.target.value)} type="datetime-local" name='visitDate' placeholder='Дата' />
                        <Button htmlType="submit" type="primary" size="large">Добавить запись</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}