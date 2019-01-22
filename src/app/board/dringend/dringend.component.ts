import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dringend',
  templateUrl: './dringend.component.html',
  styleUrls: ['./dringend.component.css']
})
export class DringendComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBar) { }

  ngOnInit() {
  }

  // onSubmit(){
  //   this.setData();
  //   this.
  // }

}
