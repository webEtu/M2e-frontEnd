import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Channel } from '../models/channel';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  public collection$: BehaviorSubject<Channel[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi + 'channels';
    this.collection$ = new BehaviorSubject<Channel[]>([]);

    this.refreshChannels();
   }

   public refreshChannels() {
      this.httpClient.get<Channel[]>(this.urlApi).subscribe((data) => {
      this.collection$.next(data);
    })
   }

   public add(chan: Channel): Observable<Channel> {
    return this.httpClient.post<Channel>(`${this.urlApi}`, chan).pipe(
      tap(() => {
        this.refreshChannels();
      })
    );
  }

  public delete(id: number): Observable<Channel> {
    return this.httpClient.delete<Channel>(`${this.urlApi}/`+id).pipe(
      tap(() => {
        this.refreshChannels();
      })
    );
  }

  public update(chan: Channel): Observable<Channel> {
    return this.httpClient.patch<Channel>(`${this.urlApi}/`+chan.id, chan).pipe(
      tap(() => {
        this.refreshChannels();
      })
    );
  }
}
