import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TelefonatComponent } from './telefonat/telefonat.component';
import { DringendComponent} from './dringend/dringend.component';
import { MitarbeiterComponent} from './mitarbeiter/mitarbeiter.component';
import { SonstigesComponent} from './sonstiges/sonstiges.component';
import { VeranstaltungComponent} from './veranstaltung/veranstaltung.component';
import { WanderkarteComponent} from './wanderkarte/wanderkarte.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TelefonatService} from './telefonat/telefonat.service';
import {Observable} from 'rxjs';
import {Telefonat} from './telefonat/telefonat';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  //Die 4 Säulen:
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  tel: Telefonat[];
  telefonat:Map<string, string>;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  constructor(private dialog: MatDialog,
              private telefonatService: TelefonatService) { }

  ngOnInit() {
    //this.telefonatService.getAllTelefonatCards();

    this.getTelefonatCard();
  }

  getTelefonatCard() {
    this.telefonatService.getAllTelefonatCards()
      .subscribe(tele => this.tel = tele);
  }


  newTelefonat(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(TelefonatComponent);
  }

  newDringend(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(DringendComponent);
  }

  newMitarbeiter(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(MitarbeiterComponent);
  }

  newVeranstaltung(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(VeranstaltungComponent);
  }

  newWanderkarte(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(WanderkarteComponent);
  }
  newSonstiges(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(SonstigesComponent);
  }
}
