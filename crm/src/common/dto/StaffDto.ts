export interface StaffDto {
    id: number,
    firstName: string,
    patronymic: string,
    surName: string,
    fullName: string,
    position: string,
    startWorkDate: string,
    photo: string
  }
  export interface CreateStaffDto {
    firstName: string,
    patronymic: string,
    surName: string,
    position: string,
    startWorkDate: string,
    photo: string
  }

  export interface DeleteStaffDto {
    id: number
  }