import {Component, OnInit} from '@angular/core';
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
              title= '';
  phoneNumber = '';
  message = '';
  category = '';
  date = '';
  cardCategory = '';
  lastmodified='';
  created='';
  map = new Map();

  ngOnInit(){}

  onSubmit() {

    this.setData();
    this.telefonatService.sendData(this.map).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });

    this.snackBarRef.open('Karte wurde angelegt!' , '', {duration: 2000});
  }

  setData(){
    this.map.set('title', this.title)
      .set('message', this.message)
      .set('phonenumber', this.phoneNumber)
      .set('date', this.date)
      .set('cardCategory', 'telefonat')
      .set('category', this.category);


    console.log('title: ' + this.title);
    console.log('phone: ' + this.phoneNumber);
    console.log('message: ' + this.message);
    console.log('date: ' + this.date);
    console.log('cardCategory: ' + 'telefonat');
    console.log('category: ' + this.category);
  }

  onUpdateTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
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
    console.log('event.value: ' + event.value);
    this.category = event.value;
    console.log('category via event.value' + this.category);
    console.log('event.source.name' + event.source.name);
  }


}

