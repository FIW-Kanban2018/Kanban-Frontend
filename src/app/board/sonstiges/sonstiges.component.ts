import { Component, OnInit } from '@angular/core';
import {MatRadioChange, MatSnackBar} from '@angular/material';
import {SonstigesService} from './sonstiges.service';

@Component({
  selector: 'app-sonstiges',
  templateUrl: './sonstiges.component.html',
  styleUrls: ['./sonstiges.component.css']
})
export class SonstigesComponent implements OnInit {

  constructor(private sonstigesService: SonstigesService, public snackBarRef: MatSnackBar) { }

  title = '';
  deadline = '';
  todolist = '';
  posttask = '';                        // (Folgeaktivität)
  lastmodified = '';                  //date)
  created = '';                       //(date)
  category = '';
  cardCategory = '';
  map = new Map();

  ngOnInit() {
  }
  onSubmit(){
    this.setData();
    this.sonstigesService.sendData(this.map).subscribe(
      res =>{ console.log(res);},
      err => { console.log("Error occured");});
    this.snackBarRef.open('Karte wurde angelegt!','', {duration: 2000});
  }

  setData(){
    this.map.set('title', this.title)
      .set('deadline', this.deadline)
      .set('todolist', this.todolist)
      .set('posttask', this.posttask)
     // .set('lastmodified', this.lastmodified)
      .set('cardCategory', this.cardCategory)
      .set('category', this.category);

    console.log('title' + this.title);
    console.log('deadline' + this.deadline);
    console.log('todolist'+ this.todolist);
    console.log('posttask'+ this.posttask);
    console.log('cardCategory'+ this.cardCategory);
    console.log('category'+ this.category);
  }

  onUpdateTitle(event:Event) {
    this.title = (<HTMLInputElement> event.target).value;
  }
  onUpdateDeadline(event:Event){
    this.deadline = (<HTMLInputElement>event.target).value;
  }
  onUpdateTodolist(event:Event){
    this.todolist = (<HTMLInputElement>event.target).value;
  }
  onUpdatePosttask(event:Event){
    this.posttask = (<HTMLInputElement>event.target).value;
  }

  changeRadioValue(event: MatRadioChange){
    console.log('event.value: ' + event.value);
    this.category = event.value;
    console.log('category via event.value' + this.category);
    console.log('event.source.name' + event.source.name);
  }


}
