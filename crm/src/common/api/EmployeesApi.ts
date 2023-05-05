import { StaffDto, CreateStaffDto } from "../dto/StaffDto";
import { HttpService } from "../services/HttpService";

class EmployeesApi extends HttpService {
    constructor() {
        super('staff');
    }

    getAll(): Promise<StaffDto[]> {
        return this.get('');
    }

    create(body: CreateStaffDto): Promise<void> {
        return this.post('', body);
    }

    deleteCard(id: number): Promise<number> {
        return this.delete('', id);
    }
}

export default new EmployeesApi();