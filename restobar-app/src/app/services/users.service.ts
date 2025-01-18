import { CreateUserRequestModel } from '../models/create-user-request.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserRequestModel } from '../models/login-user-request.model';
import { LoginUserResponseModel } from '../models/login-user-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private baseUrl='http://restobar-api-production.up.railway.app';
  private baseUrl='http://localhost:5100';
  constructor(private http:HttpClient) { }

  register(request:CreateUserRequestModel):Observable<LoginUserResponseModel>{
    return this.http.post<LoginUserResponseModel>(`${this.baseUrl}/users/register`,request);
  }

  login(request:LoginUserRequestModel):Observable<LoginUserResponseModel>{
    return this.http.post<LoginUserResponseModel>(`${this.baseUrl}/users/login`,request)
  }
  
}
