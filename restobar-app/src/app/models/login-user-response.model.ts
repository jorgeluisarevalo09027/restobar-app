export interface ILoginUserResponseModel {
    message: string;
    token: string;
  }
  
  export class LoginUserResponseModel implements ILoginUserResponseModel {
    constructor(init?:Partial<LoginUserResponseModel>){
        Object.assign(this,init)
    }
    message!: string;
    token!: string;
  }
  