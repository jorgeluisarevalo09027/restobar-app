import { UserResponseModel } from "./user-response.model";

export interface ICreateUserResponseModel {
    message:string,
    data: UserResponseModel 
}

export class CreateUserResponseModel implements ICreateUserResponseModel{
    constructor(init?:Partial<CreateUserResponseModel>){
        Object.assign(this, init)
    }
    message!: string;
    data!: UserResponseModel;
}