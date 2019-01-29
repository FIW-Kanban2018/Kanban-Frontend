import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonatService {

  constructor(private http: HttpClient) { }
  public newCardEvent: EventEmitter<any> = new EventEmitter();

  urlServer = 'http://localhost:8080/telefonat';


  public sendData(data: Map<string, string>): Observable<any>  {
    const urlNew = this.urlServer + '/new'
    console.log(urlNew);

    const convMap = {};
    data.forEach((val: string, key: any) => {
      convMap[key] = val;
    });
    this.newCardEvent.emit();
    //Angular uses Observables with httpClient, the request is only sent when
    //we subscribe to this observable.
    return this.http.post(urlNew, convMap);
  }

  public getTelefonatCard(id: number): Observable<any> {
    const urlId = this.urlServer + id;
    return this.http.get(urlId);
  }

  public getAllTelefonatCards(): Observable<any>  {
    const urlId = this.urlServer + "/all";
    return this.http.get(urlId);
  }
}
