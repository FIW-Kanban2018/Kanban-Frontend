import { Component, OnInit } from '@angular/core';
import {WanderkarteService} from './wanderkarte.service';

import {MatRadioChange, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-wanderkarte',
  templateUrl: './wanderkarte.component.html',
  styleUrls: ['./wanderkarte.component.css']
})
export class WanderkarteComponent implements OnInit {

  constructor(private wanderkarteService: WanderkarteService,
              public snackBarRef: MatSnackBar) { }

  title = '';
  type = '';
  from = '';
  to = '';
  date = '';
  deadline = '';
  message = '';
  lastmodified = '';
  created = '';
// Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
// Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = 'wanderkarte';
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

  setData() {
    this.map
      .set('title', this.title)
      .set('type', this.type)
      .set('from', this.from)
      .set('to', this.to)
      .set('date', this.date)
      .set('deadline', this.deadline)
      .set('message', this.message)

      .set('category', this.category);

      .set('cardCategory', this.cardCategory);



    console.log('title' + this.title);
    console.log('type' + this.type);
    console.log('from' + this.from);
    console.log('to' + this.to);
    console.log('date' + this.date);
    console.log('deadline' + this.deadline);
    console.log('message' + this.message);
    console.log('category' + this.category);

    console.log('cardCategory' + this.cardCategory);

  }


  onUpdateTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;

  }
  onUpdateType(event: Event) {
    this.type = (<HTMLInputElement>event.target).value;
  }

  onUpdateFrom(event: Event) {
    this.from = (<HTMLInputElement>event.target).value;
  }
  onUpdateTo(event: Event) {
    this.to = (<HTMLInputElement>event.target).value;
  }
  onUpdateDate(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
  }
  onUpdateDeadline(event: Event) {
    this.deadline = (<HTMLInputElement>event.target).value;
  }
  onUpdateMessage(event: Event) {
    this.message = (<HTMLInputElement>event.target).value;
  }



  changeRadioValue(event: MatRadioChange){
    console.log('event.value: ' + event.value);

  onUpdateCategory(event: Event) {
    this.category = (<HTMLInputElement>event.target).value;
  }
  onUpdateCardCategory(event: Event) {
     this.cardCategory = (<HTMLInputElement>event.target).value;
  }


 
    this.category = event.value;
    console.log('category via event.value' + this.category);
    console.log('event.source.name' + event.source.name);
  }



}
