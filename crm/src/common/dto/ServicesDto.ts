export interface ServiceDto {
    id: number,
    name: string,
    description: string,
    price: number,
    photo: string,
    isPopular: boolean
}


export interface CreateServiceDto {
    id: number,
    name: string,
    description: string,
    categoryId: number,
    price: number,
    photo: string,
    isPopular: boolean
  }

  export interface DeleteServiceDto {
    id: number
  }