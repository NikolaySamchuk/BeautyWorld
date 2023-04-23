import { StaffDto } from "../../common/dto";
import defaultPhoto from "../../Image/defaultPhoto.jpg"

interface EmployeeCardProps {
    employee: StaffDto;
    remove: () => void;
}

export function EmployeeCard(props: EmployeeCardProps) {
    return (
        <div>
            {props.employee.photo ? <div><img style={{ maxWidth: 200 }} src={props.employee.photo} alt={props.employee.firstName} /></div> : <div><img style={{ maxWidth: 200 }} src={defaultPhoto} alt={props.employee.firstName} /></div>}
            <div>{props.employee.surName} {props.employee.firstName}</div>
            <div>{props.employee.position}</div>
            <div>{props.employee.startWorkDate}</div>
            <button onClick={props.remove}>Удалить</button>
        </div>
    );
}