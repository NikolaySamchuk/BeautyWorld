import { useState } from 'react';
import { Button, Modal } from 'antd';
import { PatchOrderDto } from '../../../common/dto';
import { EmployeesApi } from '../../../common/api';
import ServiceApi from '../../../common/api/ServiceApi';
import OrdersApi from '../../../common/api/OrdersApi';

interface OrderEditProps {
    IcustomerId: number;
}

export function OrderEdit(props: OrderEditProps) {

    const showMasters = () => {
        const masterSelect: HTMLElement | null = document.getElementById('masters');

        const getValue = (async () => {
            const data = await EmployeesApi.getAll();
            for (let i = 0; i < data.length; i++) {
                let newOption = new Option(data[i].fullName, String(data[i].id));
                masterSelect && masterSelect.append(newOption);
            }
        })
        getValue();
        console.log(masterSelect)
    }

    const showServices = () => {
        const serviceSelect: HTMLElement | null = document.getElementById('services');

        const getValue = (async () => {
            const data = await ServiceApi.getAll();
            for (let i = 0; i < data.length; i++) {
                let newOption = new Option(data[i].name, String(data[i].id));
                serviceSelect && serviceSelect.append(newOption);
            }
          })
          getValue();
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
        setCustomerId(props.IcustomerId);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        orderEdit({ customerId, masterId, serviceId, visitDate, status, finishStatus }, customerId);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [customerId, setCustomerId] = useState<number>(0);
    const [masterId, setMasterId] = useState<number>(0);
    const [serviceId, setServiceId] = useState<number>(0);
    const [visitDate, setVisitDate] = useState('');
    const [status, setStatus] = useState('');
    const [finishStatus, setFinishStatus] = useState('');



    const orderEdit = (dataIn: PatchOrderDto, id: number) => {
        const getValue = (async () => {
            const data = await OrdersApi.patchOrder({
                customerId: dataIn.customerId,
                masterId: dataIn.masterId,
                serviceId: dataIn.serviceId,
                visitDate: dataIn.visitDate,
                status: dataIn.status,
                finishStatus: dataIn.finishStatus
            }, id);
        })
        getValue();
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>Редактировать</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Внести изменения'} cancelText={'Отмена'}>
                <form className="create-card" id="reset-form">
                    <h1 className="create-card__title">Редактирование записи</h1>
                    <label className="create-card__label" htmlFor="masterId">Выбирите мастера</label>
                    <select className="create-card__input" onClick={showMasters} id="masters" value={masterId} onChange={e => setMasterId(Number(e.target.value))} name='masterId' >
                        <option value="">Не выбран</option>
                    </select>
                    <label className="create-card__label" htmlFor="serviceId">Выбирите услугу</label>
                    <select className="create-card__input" onClick={showServices} id="services" value={serviceId} onChange={e => setServiceId(Number(e.target.value))} name='serviceId' >
                        <option value="">Не выбран</option>
                    </select>
                    <label className="create-card__label" htmlFor="status">Установите статус</label>
                    <select className="create-card__input" id="status-select" value={status} onChange={e => setStatus(e.target.value)} name='status' >
                        <option value="">Не выбрано</option>
                        <option value="Opened">Opened</option>
                        <option value="Closed ">Closed </option>
                    </select>
                    <label className="create-card__label" htmlFor="finishStatus">Установите статус/завершение</label>
                    <select className="create-card__input" id="finishStatus-select" value={finishStatus} onChange={e => setFinishStatus(e.target.value)} name='finishStatus' >
                        <option value="">Не выбрано</option>
                        <option value="Success">Success</option>
                        <option value="Failed ">Failed </option>
                    </select>
                    <label className="create-card__label" htmlFor="visitDate">Установите дату</label>
                    <input className="create-card__input" value={visitDate} onChange={e => setVisitDate(e.target.value)} type="datetime-local" name='visitDate'/>
                </form>
            </Modal>
        </>
    );
};
