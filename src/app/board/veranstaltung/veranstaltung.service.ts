import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class VeranstaltungService{

  constructor(private http: HttpClient) { }

  urlServer = 'http://localhost:8080/veranstaltung';


  public sendData(data: Map<string, string>): Observable<any>  {
    const urlNew = this.urlServer + '/new'
    console.log(urlNew);

    const convMap = {};
    data.forEach((val: string, key: any) => {
      convMap[key] = val;
    });

    //Angular uses Observables with httpClient, the request is only sent when
    //we subscribe to this observable.
    return this.http.post(urlNew, convMap);
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log("Error occured");
    //   });
  }

  public getVeranstaltungCard(id: number)  {
    const urlId = this.urlServer + id;
    return this.http.get(urlId).subscribe(
      res => {
        console.log(res);
      });
  }
}
