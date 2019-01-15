import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-telefonat',
  templateUrl: './telefonat.component.html',
  styleUrls: ['./telefonat.component.css'],
})

export class TelefonatComponent implements OnInit {

  constructor(private http: HttpClient) {}

  urlServer:string = 'http://localhost:8080/telefonat';
  @Input('ngModel')
  caller:string = '';
  @Input('ngModel')
  phonenumber:string = '';
  @Input('ngModel')
  message:string = '';

  //params = new HttpParams();
  map = new Map();

  ngOnInit(){}

  onSubmit() {
    // this.params.set('caller', caller)
    //    .set('phonenumber', this.phonenumber)
    //    .set('message', this.message);

    const headers = new HttpHeaders()
      .set("X-CustomHeader", "custom header value");

    this.map.set('caller', this.caller)
      .set('phonenumber', this.phonenumber)
      .set('message', this.message);
    console.log(this.caller);
    let urlNew = this.urlServer + '/new'
    console.log(urlNew);
    let req = this.http.post(urlNew, this.map).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });


    // let req = this.http.post(this.urlServer + '/new', data)
    //   .subscribe(
    //   res => {
    //   console.log(res);
    // },
    // err => {
    //   console.log("Error occured");
    // });

  }

}

