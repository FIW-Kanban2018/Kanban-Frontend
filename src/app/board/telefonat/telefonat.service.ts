import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {TelefonatComponent} from './telefonat.component';
import {BoardComponent} from '../board.component';
import {Telefonat} from './telefonat';

@Injectable({
  providedIn: 'root'
})
export class TelefonatService {

  constructor(private http: HttpClient,
              private boardComopnent: BoardComponent) { }

  urlServer = 'http://localhost:8080/telefonat';


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

  public getTelefonatCard(id: number):Observable<Telefonat> {
    const urlId = this.urlServer + id;
    return this.http.get<Telefonat>(urlId)
      .pipe();

      // .subscribe(
      //   res => {
      //     console.log(res);
      //     return res;
      //   },
      //   err => {
      //     console.log("Error occured");
      //   });;
  }

  public getAllTelefonatCards():Observable<Telefonat[]> {
    const urlAll = this.urlServer + "/all";
    return this.http.get<Telefonat[]>(urlAll)
      .pipe();


      // .subscribe(
      //   ((telefonat: Map<string, string>) => {
      //       this.boardComopnent.setTelefonat(telefonat);
      //     }
      //   ));

      // .pipe(
      //   map(responce=>responce.json()),
      //   map(
      //   (response: Response) => {
      //     const data = response.json();
      //     for (const server of data) {
      //
      //     }
      //     return data;
      //   }

  }
}
