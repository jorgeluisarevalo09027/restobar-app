export interface ICreateUserRequestModel {
    key:string
    email: string;
    name: string;
    phone: string;
}

export class CreateUserRequestModel implements ICreateUserRequestModel {
  constructor(init?:Partial<CreateUserRequestModel>){
    Object.assign(this, init)
  }
  key!:string;
  email!: string;
  name!: string;
  phone!: string;
}
  

