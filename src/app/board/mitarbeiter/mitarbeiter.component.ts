import { Component, OnInit } from '@angular/core';
import {MitarbeiterService} from './mitarbeiter.service';
import {MatRadioChange, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.css']
})
export class MitarbeiterComponent implements OnInit {

  constructor(private mitarbeiterService: MitarbeiterService , public snackBarRef: MatSnackBar) { }

  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

  title = '';
  dob = '';  // Geburtsdatum
  internextern = '';
  date = ''; // Einsatzdatum
  place = ''; // Einsatzort
  task = '';
  lastmodified = ''; // Datum
  created = ''; // Datum
  category = '';
  map = new Map();

  ngOnInit() {
  }

    onSubmit() {
    this.setData();
    this.mitarbeiterService.sendData(this.map).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured.'); });
    this.snackBarRef.open('Karte wurde angelegt!', '', {duration: 2000});
      }
      setData() {
    this.map.set('title', this.title)
      .set('dob', this.dob)
      .set('internextern', this.internextern)
      .set('date', this.date)
      .set('place', this.place)
      .set('aufgabe', this.task)
      .set('cardCategory', 'mitarbeiter')
      .set('catergory', this.category);


        console.log('title', this.title);
        console.log('dob', this.dob);
        console.log('internextern', this.internextern);
        console.log('date', this.date);
        console.log('place', this.place);
        console.log('task', this.task);
        console.log('category' + this.category);
      }

      onUpdateTitle(event: Event) {this.title = (<HTMLInputElement>event.target).value;}
      onUpdateDOB(event: Event) {this.dob = (<HTMLInputElement>event.target).value;}
      // onUpdateInternExtern(event: Event){this.internextern = (<HTMLInputElement>event.target).value;}
      onUpdateDate(event: Event){this.date = (<HTMLInputElement>event.target).value;}
      onUpdatePlace(event: Event){this.place = (<HTMLInputElement>event.target).value;}
      onUpdateTask(event: Event){this.task = (<HTMLInputElement>event.target).value;}
      // onUpdateLastmodified(event: Event){this.lastmodified = (<HTMLInputElement>event.target).value;}

      changeInternExtern(event: MatRadioChange){
      console.log('event.value: ' + event.value);
      this.internextern = event.value;
      console.log('intern extern via event.value' + this.internextern);
      console.log('event.source.name' + event.source.name);
      }

      changeRadioValue(event: MatRadioChange) {
        console.log('event.value: ' + event.value);
        this.category = event.value;
        console.log('category via event.value' + this.category);
        console.log('event.source.name' + event.source.name);
      }
}
