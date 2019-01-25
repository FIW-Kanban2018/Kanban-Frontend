import { Component, OnInit } from '@angular/core';
import {VeranstaltungService} from './veranstaltung.service';

import {MatRadioChange, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-veranstaltung',
  templateUrl: './veranstaltung.component.html',
  styleUrls: ['./veranstaltung.component.css']
})
export class VeranstaltungComponent implements OnInit {

  constructor(private veranstaltungService: VeranstaltungService,
              public snackBarRef: MatSnackBar) { }



  caller = '';
  phoneNumber = '';
  message = '';
  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';
  date = '';
  map = new Map();

  ngOnInit(){}

  onSubmit() {

    this.setData();
    this.veranstaltungService.sendData(this.map).subscribe(
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
      .set('date', this.date)
      .set('category', this.category);

    console.log('caller: ' + this.caller);
    console.log('phone: ' + this.phoneNumber);
    console.log('message: ' + this.message);
    console.log('date: ' + this.date);
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

  onUpdateDate(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
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
