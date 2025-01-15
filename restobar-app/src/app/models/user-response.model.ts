export interface IUserResponseModel {
    _id:string;
    email:string;
    name:string;
    phone:string;
    key:string;
    createdAt:Date;
    updatedAt:Date;
}

export class UserResponseModel implements IUserResponseModel{
    constructor(init?:Partial<UserResponseModel>){
        Object.assign(this,init)
    }    
    _id!: string;
    email!: string;
    name!: string;
    phone!: string;
    key!: string;
    createdAt!: Date;
    updatedAt!: Date;
}