import {Component, Input, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TelefonatComponent } from './telefonat/telefonat.component';
import { DringendComponent} from './dringend/dringend.component';
import { MitarbeiterComponent} from './mitarbeiter/mitarbeiter.component';
import { SonstigesComponent} from './sonstiges/sonstiges.component';
import { VeranstaltungComponent} from './veranstaltung/veranstaltung.component';
import { WanderkarteComponent} from './wanderkarte/wanderkarte.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TelefonatService} from './telefonat/telefonat.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private dialog: MatDialog, private telefonatService: TelefonatService, private http: HttpClient) { }

  urlServerGeschaeftszimmer = 'http://localhost:8080/category/geschaeft';
  urlServerReferat = 'http://localhost:8080/category/referatsueber';
  urlServerTermine = 'http://localhost:8080/category/langfristig';
  urlServerDone = 'http://localhost:8080/category/done';

  geschaeftszimmerList: any;
  refList: any;
  termineList: any;
  doneList1: any;



 ngOnInit() {
    // this.getTelefonatData();
    // this.telefonatService.newCardEvent.subscribe(this.getTelefonatData);
    this.geschaeftszimmerList='';
    this.refList='';
    this.termineList='';
    this.doneList1='';
    this.getAllGeschaeftszimmerData();
    this.getAllReferatData();
    this.getDoneData();
    this.getTemineData();
 }

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

  getColor(cardCategory: String) {
    if(cardCategory === 'dringend') return '#C40046'
    else if(cardCategory === 'telefonat') return '#FFD347'
    else if(cardCategory === 'wanderkarte') return '#337299'
    else if(cardCategory === 'veranstaltung') return '#D09EB6'
    else if(cardCategory === 'mitarbeiter') return '#90C745'
    else if(cardCategory === 'sonstiges') return '#99E3FA';
  }

  getAllGeschaeftszimmerData() {
    console.log('test Geschaeftszimmer get Data');
    console.log('this: ', this);
    this.http.get(this.urlServerGeschaeftszimmer).subscribe((data) => {
      this.geschaeftszimmerList = data;
    });
  }

  getAllReferatData() {
    console.log('test Referat get Data');
    console.log('this: ', this);
    this.http.get(this.urlServerReferat).subscribe((data) => {
      this.refList = data;
    });
  }

  getTemineData() {
    console.log('test Termine get Data');
    console.log('this: ', this);
    this.http.get(this.urlServerTermine).subscribe((data) => {
      this.termineList = data;
    });
  }

  getDoneData() {
    console.log('test Done get Data');
    console.log('this: ', this);
    this.http.get(this.urlServerDone).subscribe((data) => {
      this.doneList1= data;
    });
  }
   /* this.getTelefonatData();
    this.telefonatService.newCardEvent.subscribe(this.getTelefonatData);
  }

  getTelefonatData(){
    console.log("test Get data");
    console.log("this: " , this);
    this.telefonatService.getAllTelefonatCards().subscribe((data) =>
    {
      console.log(data);
      this.telefonatList = data;
    });
  }
*/
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
