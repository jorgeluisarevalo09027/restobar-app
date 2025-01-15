export interface ILoginUserRequestModel {
  email: string;
  key: string;
}

export class LoginUserRequestModel implements ILoginUserRequestModel {
    constructor(init?:Partial<LoginUserRequestModel>){
        Object.assign(this,init)
    }
    email!: string;
    key!: string;
}

