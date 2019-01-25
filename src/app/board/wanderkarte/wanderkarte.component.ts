import { Component, OnInit } from '@angular/core';
import {WanderkarteService} from './wanderkarte.service';
import {MatRadioChange, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-wanderkarte',
  templateUrl: './wanderkarte.component.html',
  styleUrls: ['./wanderkarte.component.css']
})
export class WanderkarteComponent implements OnInit {

  constructor(private wanderkarteService: WanderkarteService,
              public snackBarRef: MatSnackBar) { }

  von='';
  fuer='';
  aufgabe='';
  titel='';
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
    this.wanderkarteService.sendData(this.map).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });

    this.snackBarRef.open('Karte wurde angelegt!' , 'Oki Doki', {duration: 1500});
  }

  setData(){
    this.map
      .set('message', this.message)
      .set('phonenumber', this.phoneNumber)
      .set('date', this.date)
      .set('category', this.category)
      .set('titel', this.category)
      .set('von', this.category)
      .set('fuer', this.category)
      .set('aufgabe', this.category);



    console.log('phone: ' + this.phoneNumber);
    console.log('message: ' + this.message);
    console.log('date: ' + this.date);
    console.log('category: ' + this.category);
    console.log('von: ' + this.category);
    console.log('fuer: ' + this.category);
    console.log('titel: ' + this.category);
    console.log('aufgabe: ' + this.category);
  }

  onUpdateTitel(event: Event) {
    this.caller = (<HTMLInputElement>event.target).value;
  }

  onUpdateAufgabe(event: Event) {
    this.caller = (<HTMLInputElement>event.target).value;
  }
  onUpdateVon(event: Event) {
    this.caller = (<HTMLInputElement>event.target).value;
  }
  onUpdateFuer(event: Event) {
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
