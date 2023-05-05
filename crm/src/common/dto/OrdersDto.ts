export interface OrderDto {
  id: number,
  createdDate: string,
  customer: {
    id: number,
    firstName: string,
    patronymic: string,
    surName: string,
    fullName: string,
    phone: string,
  },
  visitDate: string,
  status: string,
  master: {
    id: number,
    firstName: string,
    patronymic: string,
    surName: string,
    fullName: string,
    position: string,
    startWorkDate: string,
    photo: string
  },
  service: {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string,
    isPopular: boolean
  },
  finishStatus: string
}

export interface LineOrderDto {
  id: number,
  createdDate: string,
  customerName: string,
  customerPhone: string,
  masterFullName: string,
  masterPosition: string,
  serviceName: string,
  serviceDescription: string,
  servicePrice: number,
  visitDate: string,
  status: string,
}


export interface CreateOrderDto {
  name: string,
  phone: string,
  masterId: number,
  serviceId: number,
  visitDate: string
}

export interface PatchOrderDto {
  customerId: number,
  masterId: number,
  serviceId: number,
  visitDate: string,
  status: string,
  finishStatus: string
}

export interface DeleteOrderDto {
  id: number
}