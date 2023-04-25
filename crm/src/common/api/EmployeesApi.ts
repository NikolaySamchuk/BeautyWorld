import { StaffDto } from "../dto";
import { HttpService } from "./HttpService";

class EmployeesApi extends HttpService {
    constructor() {
        super('staff');
    }

    getAll() {
        return this.get<StaffDto>('');
    }
}

export default new EmployeesApi();