import { useEffect, useRef, useState } from "react";
import { StaffDto, CreateStaffDto } from "../../common/dto";
import { EmployeesApi } from "../../common/api";
import { EmployeeCreateForm } from "./components/EmployeeCreateForm";
import { EmployeeCard } from "./components/EmployeeCard";
import './EmployeesPage.css'

export function EmployeesPage() {
  const [employees, setEmployees] = useState<StaffDto[]>([])
  const employeeListRef = useRef<any>();

  useEffect(() => {
    EmployeesApi.getAll().then(setEmployees);
  }, []);

  const removeEmployee = (employeeId: number) => {
    EmployeesApi.deleteCard(employeeId);
    setEmployees(employees.filter(x => x.id !== employeeId));
  };

  const createEmployee = (data: CreateStaffDto) => {

    EmployeesApi.create({
      firstName: data.firstName,
      patronymic: data.patronymic,
      surName: data.surName,
      position: data.position,
      startWorkDate: data.startWorkDate,
      photo: data.photo
    })

    setEmployees(employees.concat({
      "id": employees.length + 1,
      "firstName": data.firstName,
      "patronymic": data.patronymic,
      "surName": data.surName,
      "fullName": data.firstName +' '+ data.surName +' '+ data.patronymic,
      "position": data.position,
      "startWorkDate": data.startWorkDate,
      "photo": data.photo
    }))
  };

  return (
    <>
      <div className="employees">
        <EmployeeCreateForm onCreate={createEmployee} />
        {employees.length === 0 && <p>Нет данных</p>}
        <div ref={employeeListRef} className="employees__cards">
          {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} onRemove={() => removeEmployee(employee.id)}/>)}
        </div>
      </div>
    </>
  );
}