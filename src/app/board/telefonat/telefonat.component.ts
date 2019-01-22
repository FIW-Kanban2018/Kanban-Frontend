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

  caller = '';
  phoneNumber = '';
  message = '';
  category = '';
  date = '';
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

