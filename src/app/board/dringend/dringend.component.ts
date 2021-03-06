import { Component, OnInit, Input } from '@angular/core';
import {MatRadioChange, MatSnackBar} from '@angular/material';
import {DringendService} from './dringend.service';


@Component({
  selector: 'app-dringend',
  templateUrl: './dringend.component.html',
  styleUrls: ['./dringend.component.css']
})
export class DringendComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBar,
              public dringendService: DringendService) { }

  title = '';
  deadline = '';
  category = '';
  cardCategory = '';
  lastmodified='';
  created='';
  map = new Map();

  ngOnInit() {
  }
  onSubmit() {
    this.setData();
    this.dringendService.sendData(this.map).subscribe(
      res =>{
        console.log(res);
      },
      err => {
        console.log('Error occured.');
      }
    );
    this.snackBarRef.open('Karte wurde angelegt!', '', {duration: 2000});
  }
  setData() {
    this.map.set('title', this.title)
      .set('deadline', this.deadline)
      .set('category', this.category)
      .set('cardCategory', 'dringend');

    console.log('title: ' + this.title);
    console.log('deadline' + this.deadline);
    console.log('category' + this.category);
  }
    onUpdateTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value; }

   onUpdateDeadline(event: Event) {
    this.deadline = (<HTMLInputElement>event.target).value; }

  changeRadioValue(event: MatRadioChange) {
    console.log('event.value: ' + event.value);
    this.category = event.value;
    console.log('category via event.value' + this.category);
    console.log('event.source.name' + event.source.name);
  }
  }

