import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DringendService {

  constructor(private http: HttpClient) {
  }

  public newCardEvent: EventEmitter<any> = new EventEmitter();

  urlServer = 'http://localhost:8080/dringend';

  public sendData(data: Map<string, string>): Observable<any> {
    const urlNew = this.urlServer + '/new';
    console.log(urlNew);

    const convMap = {};
    data.forEach((val: string, key: any) => {
      convMap[key] = val;
    });

    this.newCardEvent.emit();
    return this.http.post(urlNew, convMap);
  }

  public getDringendCard(id: number) {
    const urlId = this.urlServer + id;
    return this.http.get(urlId);
  }

  public getAllDringendCards(): Observable<any> {
    const urlId = this.urlServer + '/all';
    return this.http.get(urlId);
  }
}
