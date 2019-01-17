import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatRadioChange, MatSnackBar} from '@angular/material';
import {TelefonatService} from './telefonat.service';


@Component({
  selector: 'app-telefonat',
  templateUrl: './telefonat.component.html',
  styleUrls: ['./telefonat.component.css'],
})

export class TelefonatComponent implements OnInit {

  constructor(private telefonatService: TelefonatService,
              public snackBarRef: MatSnackBar) {}

  caller = '';
  phoneNumber = '';
  message = '';
  category = '';

  map = new Map();

  ngOnInit(){}

  onSubmit() {

    this.telefonatService.sendData(this.map).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });

    this.snackBarRef.open('Karte wurde angelegt!' , 'Oki Doki', {duration: 1500});
  }

  setData(){
    this.map.set('caller', this.caller)
      .set('message', this.message)
      .set('phonenumber', this.phoneNumber)
      .set('category', this.category);

    console.log('caller: ' + this.caller);
    console.log('phone: ' + this.phoneNumber);
    console.log('message: ' + this.message);
    console.log('category: ' + this.category);
  }

  onUpdateCaller(event: Event) {
    this.caller = (<HTMLInputElement>event.target).value;
  }

  onUpdatePhone(event: Event) {
    this.phoneNumber = (<HTMLInputElement>event.target).value;
  }

  onUpdateMessage(event: Event) {
    this.message = (<HTMLInputElement>event.target).value;
  }

  changeRadioValue(event: MatRadioChange){
    //this.category = this.selection;
    // this.category = mrChange.value;
    console.log('event.value: ' + event.value);
    //console.log('category via selection: ' + this.category);
    this.category = event.value;
    console.log('category via event.value' + this.category);
    console.log('event.source.name' + event.source.name);
  }


}

