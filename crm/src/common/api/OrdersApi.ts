
import { OrderDto, CreateOrderDto, PatchOrderDto } from "../dto";
import { HttpService } from "../services/HttpService";

class OrdersApi extends HttpService {
    constructor() {
        super('orders');
    }

    getAll(): Promise<OrderDto[]> {
        return this.get('');
    }

    getAllSearchName(name: string): Promise<OrderDto[]> {
        return this.getOnSearchName('', name);
    }

    getAllSearchStatus(status: string): Promise<OrderDto[]> {
        return this.getOnSearchName('', status);
    }

    getAllSearchDate(visitDateFrom: string, visitDateTo: string): Promise<OrderDto[]> {
        return this.getOnSearchDate('', visitDateFrom, visitDateTo);
    }

    create(body: CreateOrderDto): Promise<OrderDto> {
        return this.post('', body);
    }

    deleteOrder(id: number): Promise<number> {
        return this.delete('', id);
    }

    patchOrder(body: PatchOrderDto, id: number): Promise<void> {
        return this.patch('', id, body);
    }
}

export default new OrdersApi();