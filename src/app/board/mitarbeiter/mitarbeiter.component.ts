import { Component, OnInit } from '@angular/core';
import {MitarbeiterService} from './mitarbeiter.service';
import {MatRadioChange, MatSnackBar} from '@angular/material';
import set = Reflect.set;

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.css']
})
export class MitarbeiterComponent implements OnInit {

  constructor(private mitarbeiterService: MitarbeiterService , public snackBarRef: MatSnackBar) { }

  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

  name = '';
  dob = '';  // Geburtsdatum
  internextern = '';
  date = ''; // Einsatzdatum
  place = ''; // Einsatzort
  task = '';
  lastmodified = ''; // Datum
  created = ''; // Datum
  category = '';
  map = new Map();

  // Auswahl aus {geschaeft, referatsueber, langfristig, done}
  category = '';
  // Auswahl aus {telefonat, sonstiges, mitarbeiteranmelden, wanderkarte, veranstaltung, dringend}
  cardCategory = '';

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
    this.snackBarRef.open('Karte wurde angelegt', '', {duration: 2000});
      }
      setData() {
    this.map.set('Name', this.name)
      .set('Geburtstag', this.dob)
      .set('Intern oder Extern?', this.internextern)
      .set('Einsatzdatum', this.date)
      .set('Einsatzort', this.place)
      .set('Aufgabe', this.task)
      .set('Zuletzt geändert am:', this.lastmodified)
      .set('Erstellt am: ', this.created)
      .set('Erstellt aml: ', this.cardCategory)
      .set('catergory', this.category);


        console.log('Name', this.name);
        console.log('Geburtstag', this.dob);
        console.log('Intern oder Extern?', this.internextern);
        console.log('Einsatzdatum', this.date);
        console.log('Einsatzort', this.place);
        console.log('Aufgabe', this.task);
        console.log('Zuletzt geändert am: ', this.lastmodified);
        console.log('Erstellt am: ', this.created);
        console.log('CardCategory:', this.cardCategory )
        console.log('category: ' + this.category);
      }

      onUpdateName(event: Event) {this.name = (<HTMLInputElement>event.target).value;}
      onUpdateDOB(event: Event){this.dob = (<HTMLInputElement>event.target).value;}
      // onUpdateInternExtern(event: Event){this.internextern = (<HTMLInputElement>event.target).value;}
      onUpdateDate(event: Event){this.date = (<HTMLInputElement>event.target).value;}
      onUpdatePlace(event: Event){this.place = (<HTMLInputElement>event.target).value;}
      onUpdateTask(event: Event){this.task = (<HTMLInputElement>event.target).value;}
      onUpdateLastmodified(event: Event){this.lastmodified = (<HTMLInputElement>event.target).value;}
      onUpdateCreated(event: Event){this.created = (<HTMLInputElement>event.target).value;}
      onUpdateCard(event: Event){this.cardCategory = (<HTMLInputElement>event.target).value;}


      changeInternExtern(event: MatRadioChange){
      console.log('event.value: ' + event.value);
      this.internextern = event.value;
      console.log('intern extern via event.value' + this.internextern);
      console.log('event.source.name' + event.source.name);
      }

      changeRadioValue(event: MatRadioChange){
        console.log('event.value: ' + event.value);
        this.category = event.value;
        console.log('category via event.value' + this.category);
        console.log('event.source.name' + event.source.name);
      }
}
