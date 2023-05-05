import { ServiceDto } from "../dto";
import { HttpService } from "../services/HttpService";

class ServiceApi extends HttpService {
    constructor() {
        super('services');
    }

    getAll(): Promise<ServiceDto[]> {
        return this.get('');
    }

}

export default new ServiceApi();