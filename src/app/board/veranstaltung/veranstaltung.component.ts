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



  title = '';
  date = '';
  time = '';
  client = '';
  place = '';
  participants = '';
  todolist = '';
  deadline = '';
  lastmodified = '';
  created = '';
  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';
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

    this.snackBarRef.open('Karte wurde angelegt!' , '', {duration: 1500});
  }

  setData(){
    this.map.set('title', this.title)
      .set('date', this.date)
      .set('time', this.time)
      .set('client', this.client)
      .set('place', this.place)
      .set('participants', this.participants)
      .set('todolist', this.todolist)
      .set('deadline', this.deadline)
      .set('category', this.category)
      .set('cardCategory', 'veranstaltung')


    console.log('title: ' + this.title);
    console.log('date: ' + this.date);
    console.log('time: ' + this.time);
    console.log('client: ' + this.client);
    console.log('place: ' + this.place);
    console.log('participants', this.participants);
    console.log('todolist', this.todolist);
    console.log('deadline', this.deadline);
    console.log('category', this.category);
    console.log('cardCategory', this.category);
  }

  onUpdateTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onUpdateDate(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
  }

  onUpdateTime(event: Event) {
    this.time = (<HTMLInputElement>event.target).value;
  }

  onUpdateClient(event: Event) {
    this.client = (<HTMLInputElement>event.target).value;
  }

  onUpdatePlace(event: Event) {
    this.place = (<HTMLInputElement>event.target).value;
  }

  onUpdateParticipants(event: Event) {
    this.participants = (<HTMLInputElement>event.target).value;
  }

  onUpdateTodolist(event: Event) {
    this.todolist = (<HTMLInputElement>event.target).value;
  }

  onUpdateDeadline(event: Event) {
    this.deadline = (<HTMLInputElement>event.target).value;
  }

  onUpdateCategory(event: Event) {
    this.category = (<HTMLInputElement>event.target).value;
  }

  onUpdateCardCategory(event: Event) {
    this.cardCategory = (<HTMLInputElement>event.target).value;
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
