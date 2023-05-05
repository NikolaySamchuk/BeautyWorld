import React from 'react';
import { Popconfirm, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { LineOrderDto } from '../../../common/dto';
import { OrderEdit } from './OrderEdit';

interface EmployeeCardProps {
    data: LineOrderDto[];
    orderDelete: (numberId: number) => void;
}

export function OrderCard(props: EmployeeCardProps) {

    const columns: ColumnsType<LineOrderDto> = [
        {
            title: 'Дата создания',
            dataIndex: 'createdDate',
            key: 'createdDate',
            width: 80,
            align: 'center',
        },
        {
            title: 'Клиент',
            children: [
                {
                    title: 'Имя',
                    dataIndex: 'customerName',
                    key: 'customerName',
                    width: 50,
                    align: 'center',
                },
                {
                    title: 'Телефон',
                    dataIndex: 'customerPhone',
                    key: 'customerPhone',
                    width: 100,
                    align: 'center'
                },
            ],
        },
        {
            title: 'Мастер',
            children: [
                {
                    title: 'ФИО',
                    dataIndex: 'masterFullName',
                    key: 'masterFullName',
                    width: 80,
                    align: 'center'
                },
                {
                    title: 'Должность',
                    dataIndex: 'masterPosition',
                    key: 'masterPosition',
                    width: 80,
                    align: 'center'
                },
            ],
        },
        {
            title: 'Услуга',
            children: [
                {
                    title: 'Название',
                    dataIndex: 'serviceName',
                    key: 'serviceName',
                    width: 80,
                    align: 'center'
                },
                {
                    title: 'Описание',
                    dataIndex: 'serviceDescription',
                    key: 'serviceDescription',
                    width: 80,
                    align: 'center'
                },
                {
                    title: 'Цена',
                    dataIndex: 'servicePrice',
                    key: 'servicePrice',
                    width: 50,
                    align: 'center'
                },
            ],
        },
        {
            title: 'Дата визита',
            dataIndex: 'visitDate',
            key: 'visitDate',
            width: 80,
            align: 'center'
        },
        {
            title: 'Статус записи',
            dataIndex: 'status',
            key: 'status',
            width: 50,
            align: 'center',
        },
        {
            title: 'Действия',
            width: 70,
            align: 'center',
            render: (_, record: { id: number }) =>
                props.data.length >= 1 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <Popconfirm title="Удалить запись?" onConfirm={() => props.orderDelete(record.id)}>
                            <Button>Удалить</Button>
                        </Popconfirm>
                        <OrderEdit IcustomerId={record.id} />
                    </div>
                ) : null,
        },
    ];

    const App: React.FC = () => (
        <Table
            columns={columns}
            dataSource={props.data}
            bordered
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 500 }}
        />
    );

    return (
        <App />
    );
}