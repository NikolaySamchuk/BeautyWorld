import React from 'react';
import './App.css';

import { EmployeeCard } from './components/EmployeeCard';
import { StaffDto } from './common/dto';

const employees: StaffDto[] = [
  {
    "firstName": "Ирина",
    "patronymic": "Сергеевна",
    "surName": "Краснова",
    "position": "Мастер ногтевого сервиса",
    "photo": "http://localhost:3001/api/staff/photo/d7be2a0cc36277ba0d5fcb3b325389a5.jpg",
    "startWorkDate": "2023-04-19T12:44:20.508Z",
    "id": 1,
    "fullName": "Краснова Ирина Сергеевна"
  },
  {
    "firstName": "Жанна",
    "patronymic": "Сергеевна",
    "surName": "Калилова",
    "position": "Визажист-стилист",
    "photo": "http://localhost:3001/api/staff/photo/d7ce2a2cc36277ba0d5fcb5b325389a5.jpg",
    "startWorkDate": "2023-04-19T12:44:20.508Z",
    "id": 2,
    "fullName": "Калилова Жанна Сергеевна"
  },
  {
    "firstName": "Алина",
    "patronymic": "Сергеевна",
    "surName": "Киселева",
    "position": "Парикмахер",
    "photo": "http://localhost:3001/api/staff/photo/d7ce2a2sfdfcc36277ba0d5vvfcb5b34325389a5.jpg",
    "startWorkDate": "2023-04-19T12:44:20.508Z",
    "id": 3,
    "fullName": "Киселева Алина Сергеевна"
  },
  {
    "firstName": "Елена",
    "patronymic": "Сергеевна",
    "surName": "Иванова",
    "position": "Мастер ногтевого сервиса",
    "photo": "http://localhost:3001/api/staff/photo/d72sfdfcc36277ba0ewfefvfcb5b34325389a5.jpg",
    "startWorkDate": "2023-04-19T12:44:20.508Z",
    "id": 4,
    "fullName": "Иванова Елена Сергеевна"
  }
];

function App() {
const removeEmployee = (employeeId: number) => {

}

  return (
    <div style={{display: "flex"}}>
      {employees.map(employee => <EmployeeCard key={employee.id} remove={() => removeEmployee(employee.id)} employee={employee} />)}
    </div>
  );
}

export default App;
