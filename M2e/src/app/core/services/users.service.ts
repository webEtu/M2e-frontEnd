import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public collection$: Observable<User[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi + 'users';
    this.collection$ = this.httpClient.get<User[]>(this.urlApi);
   }
}
