import { useEffect, useRef, useState } from "react";
import { StaffDto } from "../../common/dto";
import { EmployeesApi } from "../../common/api";
import { EmployeeCreateForm, EmployeeCreateFormData } from "./components/EmployeeCreateForm";
import { EmployeeCard } from "./components/EmployeeCard";
import './EmployeesPage.css'

export function EmployeesPage() {
  const [employees, setEmployees] = useState<StaffDto[]>([])
  const employeeListRef = useRef<any>();

  useEffect(() => {
    EmployeesApi.getAll().then(setEmployees);
  }, []);

  const removeEmployee = (employeeId: number) => {
    setEmployees(employees.filter(x => x.id !== employeeId));
  };

  const createEmployee = (data: EmployeeCreateFormData) => {
    setEmployees(employees.concat({
      "id": employees.length + 1,
      "firstName": data.firstName,
      "patronymic": data.patronymic,
      "surName": data.surName,
      "fullName": data.firstName,
      "position": data.firstName,
      "startWorkDate": data.firstName,
      "photo": data.firstName
    }))
  };


  return (
    <>
      <div className="employees">
        <EmployeeCreateForm onCreate={createEmployee} />
        {employees.length === 0 && <p>Нет данных</p>}
        <div ref={employeeListRef} className="employees__cards">
          {employees.map(employee => <EmployeeCard
            key={employee.id}
            employee={employee}
            onRemove={() => removeEmployee(employee.id)}
          />)}
        </div>
      </div>
    </>
  );
}