import { useEffect, useState } from "react";
import { OrderCard } from "./components/OrderCard";
import './OrderPage.css'
import OrdersApi from "../../common/api/OrdersApi";
import { LineOrderDto, CreateOrderDto } from "../../common/dto";
import { OrderCreateForm } from "./components/OrderCreateForm";
import { OrderSearch } from "./components/OrderSearch";

export function OrderPage() {
  const [orders, setOrders] = useState<LineOrderDto[]>([])

  useEffect(() => {
    const getValue = (async () => {
      const data = await OrdersApi.getAll();
      const newData: LineOrderDto[] = data.map((order) => {
        return {
          id: order.id,
          createdDate: order.createdDate,
          customerName: order.customer.firstName,
          customerPhone: order.customer.phone,
          masterFullName: order.master.fullName,
          masterPosition: order.master.position,
          serviceName: order.service.name,
          serviceDescription: order.service.description,
          servicePrice: order.service.price,
          visitDate: order.visitDate,
          status: order.status,
        }
      });
      setOrders(newData);
    })
    getValue();
  }, []);


  const createOrder = (dataIn: CreateOrderDto) => {
    const getValue = (async () => {
      const data = await OrdersApi.create({
        name: dataIn.name,
        phone: dataIn.phone,
        masterId: dataIn.masterId,
        serviceId: dataIn.serviceId,
        visitDate: dataIn.visitDate,
      });

      if (data.status === 'Opened') {
        const getValue = (async () => {
          const data = await OrdersApi.getAll();
          const newData: LineOrderDto[] = data.map((order) => {
            return {
              id: order.id,
              createdDate: order.createdDate,
              customerName: order.customer.firstName,
              customerPhone: order.customer.phone,
              masterFullName: order.master.fullName,
              masterPosition: order.master.position,
              serviceName: order.service.name,
              serviceDescription: order.service.description,
              servicePrice: order.service.price,
              visitDate: order.visitDate,
              status: order.status,
            }
          });
          console.log(newData)
          setOrders(newData);
        })
        getValue();
      }
    })
    getValue();
  };


  const removeOrder = (orderId: number) => {
    OrdersApi.deleteOrder(orderId);
    const getValue = (async () => {
      const data = await OrdersApi.getAll();
      const newData: LineOrderDto[] = data.map((order) => {
        return {
          id: order.id,
          createdDate: order.createdDate,
          customerName: order.customer.firstName,
          customerPhone: order.customer.phone,
          masterFullName: order.master.fullName,
          masterPosition: order.master.position,
          serviceName: order.service.name,
          serviceDescription: order.service.description,
          servicePrice: order.service.price,
          visitDate: order.visitDate,
          status: order.status,
        }
      });
      setOrders(newData);
    })
    getValue();
  };


  const nameSearch = (name: string) => {
    const getValue = (async () => {
      const data = await OrdersApi.getAllSearchName(name);
      const newData: LineOrderDto[] = data.map((order) => {
        return {
          id: order.id,
          createdDate: order.createdDate,
          customerName: order.customer.firstName,
          customerPhone: order.customer.phone,
          masterFullName: order.master.fullName,
          masterPosition: order.master.position,
          serviceName: order.service.name,
          serviceDescription: order.service.description,
          servicePrice: order.service.price,
          visitDate: order.visitDate,
          status: order.status,
        }
      });
      setOrders(newData);
    })
    getValue();
  }

  const statusSearch = (status: string) => {
    const getValue = (async () => {
      const data = await OrdersApi.getAllSearchStatus(status);
      const newData: LineOrderDto[] = data.map((order) => {
        return {
          id: order.id,
          createdDate: order.createdDate,
          customerName: order.customer.firstName,
          customerPhone: order.customer.phone,
          masterFullName: order.master.fullName,
          masterPosition: order.master.position,
          serviceName: order.service.name,
          serviceDescription: order.service.description,
          servicePrice: order.service.price,
          visitDate: order.visitDate,
          status: order.status,
        }
      });
      setOrders(newData);
    })
    getValue();
  }

  const dateSearch = (visitDateFrom: string, visitDateTo: string) => {
    const getValue = (async () => {
      const data = await OrdersApi.getAllSearchDate(visitDateFrom, visitDateTo);
      const newData: LineOrderDto[] = data.map((order) => {
        return {
          id: order.id,
          createdDate: order.createdDate,
          customerName: order.customer.firstName,
          customerPhone: order.customer.phone,
          masterFullName: order.master.fullName,
          masterPosition: order.master.position,
          serviceName: order.service.name,
          serviceDescription: order.service.description,
          servicePrice: order.service.price,
          visitDate: order.visitDate,
          status: order.status,
        }
      });
      setOrders(newData);
    })
    getValue();
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
        <OrderCreateForm onCreate={createOrder} />
        <OrderSearch onNameSearch={nameSearch}  onStatusSearch={statusSearch} onDateSearch={dateSearch}/>
        <OrderCard data={orders} orderDelete={removeOrder} />
      </div>
    </>
  );
}