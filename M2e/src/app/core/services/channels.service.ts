import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  public collection$: Observable<Channel[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi + 'channels';
    this.collection$ = this.httpClient.get<Channel[]>(this.urlApi);
   }
}
