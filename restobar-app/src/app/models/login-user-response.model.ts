import { UserResponseModel } from "./user-response.model";

export interface ILoginUserResponseModel {
    message: string;
    token: string;
    data: UserResponseModel;
  }
  
  export class LoginUserResponseModel implements ILoginUserResponseModel {
    constructor(init?:Partial<LoginUserResponseModel>){
        Object.assign(this,init)
    }
    message!: string;
    token!: string;
    data!: UserResponseModel;
  }
  