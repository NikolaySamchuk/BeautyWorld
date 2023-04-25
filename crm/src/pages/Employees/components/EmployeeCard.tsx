import { StaffDto } from "../../../common/dto";
import defaultPhoto from "../../../Image/defaultPhoto.jpg"
import { Button} from 'antd';

interface EmployeeCardProps {
    employee: StaffDto;
    onRemove: () => void;
}

export function EmployeeCard(props: EmployeeCardProps) {
    return (
        <div className="emp-card">
            {props.employee.photo ? <div className="emp-card__img"><img className="emp-card__photo" src={props.employee.photo} alt={props.employee.firstName} /></div> : <div className="emp-card__img"><img className="emp-card__photo" src={defaultPhoto} alt={props.employee.firstName} /></div>}
            <div className="emp-card__name">{props.employee.surName} {props.employee.firstName}</div>
            <div className="emp-card__position">{props.employee.position}</div>
            <div className="emp-card__satrt-date">{props.employee.startWorkDate}</div>
            <Button htmlType="submit" type="primary" size="large">Удалить сотрудника</Button>
        </div>
    );
}