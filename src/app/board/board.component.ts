import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TelefonatComponent } from './telefonat/telefonat.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(

    private dialog: MatDialog) { }

  ngOnInit() {
  }


  newTelefonat(){
    //noch nicht fertig
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(TelefonatComponent);
  }
}
